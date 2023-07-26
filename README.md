# LogIn Portal using PHP Backend - Setup Guide

This repository contains the code for a LogIn Portal application, consisting of both the frontend (React) and backend (PHP). This guide will walk you through the steps to set up and run the application on your local machine.

## Prerequisites
Before you proceed, make sure you have the following software installed on your machine:

- Node.js: [https://nodejs.org](https://nodejs.org)
- XAMPP: [https://www.apachefriends.org](https://www.apachefriends.org)

## Getting Started
### Back-End
1. Clone the repository to your local machine using Git:
git clone https://github.com/abhinaykhalatkar/logIn-portal-using-php-backend.git

2. Move all files from the "logIn-portal-using-php-backend/authentication-portal-back" folder to the XAMPP "htdocs" directory:
On Windows:
move logIn-portal-using-php-backend/authentication-portal-back/* C:\xampp\htdocs\
On macOS/Linux:
mv logIn-portal-using-php-backend/authentication-portal-back/* /opt/lampp/htdocs/

3. Start the Apache server using XAMPP control panel or command-line:
On Windows: Open XAMPP control panel, and click the "Start" button for Apache.

On macOS/Linux: Open a terminal and run:
sudo /opt/lampp/lampp start

### Front-End

1. Change directory to the frontend (React) folder:
   cd logIn-portal-using-php-backend/authentication-portal-front
   
2. Install the frontend dependencies:
   npm install
   
3. Start the React development server:
   npm start


This will launch the React development server, and the frontend will be accessible at http://localhost:3000.

Using the Application
-Open your web browser and go to http://localhost:3000.
-You will be redirected to the login page. Use the following test credentials to log in:
  Email: test@test.com
  Password: Qwertz123@
-Upon successful login, you will be redirected to the home page, where a welcome message with your username will be displayed.
-To log out, click on the "Logout" button, and you will be redirected back to the login page.

Customization
You can customize the application by making changes to the React frontend or the PHP backend as needed. For example, you can modify the styling, add more features, or integrate with a database for user authentication.

Deployment
Before deploying the application to a production environment, make sure to:

Set up a secure web server for the PHP backend (e.g., Apache or Nginx) and point it to the XAMPP "htdocs" directory.
Build the React frontend for production using npm run build and serve the built files using the web server.
Contributing
Contributions to this project are welcome. Feel free to open issues or submit pull requests if you find any bugs or have suggestions for improvement.




