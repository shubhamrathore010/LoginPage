const express = require('express')
const path =  require('path')
const bcrypt = require('bcrypt')
const collection =require('./config')
const app = express();

// middleware -->
app.use(express.json())
app.use(express.urlencoded({extended: false}));

// View engine seetup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// static file setup 'Servers files from public dir' 
app.use(express.static(path.join(__dirname, '../public')));

// Route Handlers -->
// render login page
 app.get('/', (req, res) => {
    res.render('login');
 })

//  render signup page
 app.get('/signup', (req, res) => {
    res.render('signup');
 })

 app.post('/signup', async (req, res) => {
   const data = {
      name: req.body.username,
      password: req.body.password
   }
try{
   const existingUser = await collection.findOne({name: data.name});
   if(existingUser){
      res.send('User aleardy exists, Please choose a different username.')
      // return;
   } else {
   const saltRounds = 10;
   const hashedPassword = await bcrypt.hash(data.password, saltRounds)
   
   data.password = hashedPassword;
   
   const userdata = await collection.insertMany(data);
   console.log(userdata);
   res.send('User signed up successfully!');
   }
} catch (error) {
   console.log(error);
   res.status(500).send('Error signing up user');
}
});

//  login user -->
app.post('/login', async (req,res) => {
   try {
      const check = await collection.findOne({name: req.body.username})
     if(!check) { 
      res.send('User name cannot found')
      return;
   }

   // compare the hash password from the database with te plain text
   const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
  if(isPasswordMatch) {
   res.render('home')
  }else {
    req.send('Wrong password')
  }
}catch (error){
   console.log(error);
   res.status(500).send('Wrong detials')
}
});


 const port = 5000;
 app.listen(port, () => {
    console.log(`Server running ${port}`);
 })