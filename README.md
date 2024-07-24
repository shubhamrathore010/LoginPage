# User Authentication App

This is a Node.js application that allows users to sign up with a username and password, 
and stores their details in a MongoDB database. 
The app checks if a user already exists before saving the new user's details.


Features:

  User signup with username and password.
  Validation to check if the user already exists in the database.
  Secure storage of user credentials.
  passware encrptions.

  Usage
![Screenshot from 2024-07-25 02-14-15](https://github.com/user-attachments/assets/d06221b0-f287-4b26-98c5-0b6a58e36911)

   Sign Up:
        Navigate to http://localhost:8000/signup
        Enter your username and password
        If the user already exists, an error message will be displayed
        If the signup is successful, the user details will be saved in the database


  ![Screenshot from 2024-07-25 02-14-27](https://github.com/user-attachments/assets/d411cd03-06df-4895-ab92-48ce4b061478)
  
   Sign In:
        Navigate to http://localhost:8000/signin
        Enter your username and password
        If the credentials are correct, a JWT token will be generated and sent to the client
