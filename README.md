# Skapi Full Tutorial

Welcome to the complete tutorial project for Skapi, featuring a web application that allows users to chat, upload posts, and comment, and even provide an AI image generating service via 3rd party API service.

This tutorial focuses on demonstrating the use of Skapi to build a full-fledged application. The emphasis is on functionality over aesthetics.

## Pre Requisites

You must change the **service_id** and the **owner_id** in `service.js` file. You can retrieve the service ID and owner ID from the Skapi dashboard.

For more information, please refer to the [Skapi Documentation](https://docs.skapi.com/introduction/getting-started.html).

## Opening the Project

This project does not require any build tools. Simply open the `index.html` file in your browser, and it will just work.

If you are on remote server, install npm packages from your project directory:

```bash
npm i
```

Then, run the following command to build the project:

```bash
npm run start 3000
```
*The number 3000 is the port number. You can change it to any port number you want.*

You will be able to access the project at `http://[your remote server url]:3000`.


## Key Points of This Tutorial

### Built with Pure Static HTML, CSS and JavaScript

While Skapi is compatible with various frameworks, this tutorial utilizes pure static HTML, CSS, and JavaScript.
It showcases how even basic static HTML can be used with Skapi to create a complete web application.

The CSS stylings are intentionally minimalistic, yet the application remains fully responsive across different devices.

### Building a Full-Scale Application

This tutorial encompasses all aspects of heavy lifting in production-level application, including:

- Authentication
  - Account creation
  - Login/Logout functionalities
  - Account removal
  - Password reset and recovery options
  - Profile updates
  - Account recovery
  - Email verification
  - Profile picture uploads

- Instaclone (Instagram Clone) Features
  - Post creation
  - Post private posts
  - Commenting on posts
  - Liking and unliking posts
  - Tagging and searching posts by tag
  - Indexing posts by likes, comments, users
  - Post deletion

- Simple Chat Room Application
  - broadcast text message in chat room
  - Send/Receive private text message between users
  - List all users in chat room

- AI Image Generator
  - Generate images using AI with given text
  - Making a request to 3rd party API with client secret key
  
### Detailed Documentation

All the code in this tutorial is heavily commented, and the comments are written to help you understand the code and the logic behind it.