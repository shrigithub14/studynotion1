
# StudyNotion - EdTech Platform

🚀 [Link to website](https://studynotion-frontend.vercel.app/)

## Introduction
StudyNotion is a fully functional EdTech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.

## Table of Contents
- [Introduction](#introduction)
- [System Architecture](#system-architecture)
- [Front-end](#front-end)
- [Back-end](#back-end)
- [Database](#database)
- [Architecture Diagram](#architecture-diagram)
- [API Design](#api-design)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)

## Introduction
StudyNotion aims to provide a seamless and interactive learning experience for students, making education more accessible and engaging. Additionally, the platform serves as a platform for instructors to showcase their expertise and connect with learners globally.

In the following sections, we will cover the technical details of the platform, including the system architecture, API design, installation, usage instructions, and potential future enhancements.

## System Architecture
The StudyNotion EdTech platform consists of three main components: the front-end, the back-end, and the database. The platform follows a client-server architecture, with the front-end serving as the client and the back-end and database serving as the server.

### Front-end
The front-end of the platform is built using ReactJS, providing dynamic and responsive user interfaces. It communicates with the back-end using RESTful API calls.

#### Front End Pages
For **Students**:
- Homepage
- Course List
- Wishlist
- Cart Checkout
- Course Content
- User Details
- User Edit Details

For **Instructors**:
- Dashboard
- Insights
- Course Management Pages
- View and Edit Profile Details

### Back-end
The back-end is built using NodeJS and ExpressJS, providing APIs for the front-end to interact with. It handles user authentication, course management, media storage, and payment processing.

#### Back-end Features:
- User Authentication and Authorization
- Course Management
- Payment Integration (Razorpay)
- Cloud-based Media Management (Cloudinary)
- Markdown Formatting for Course Content

#### Back-end Tools and Libraries:
- Node.js, Express.js
- MongoDB
- JWT for authentication
- Bcrypt for password hashing
- Mongoose for database interaction

## Database
StudyNotion uses MongoDB, a NoSQL database, for data storage. The database schema includes models for students, instructors, and courses.

### Database Schema:
- **Student Schema**: name, email, password, course details
- **Instructor Schema**: name, email, password, course details
- **Course Schema**: course name, description, instructor details, media content

## Architecture Diagram
![Architecture Diagram](path/to/your/architecture-diagram.png)

## API Design
The StudyNotion API is built following the REST architectural style using Node.js and Express.js. It supports standard HTTP methods like GET, POST, PUT, DELETE for interacting with course and user data.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/username/repo.git
   ```

2. Navigate to the project directory:
   ```bash
   cd StudyNotion
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration
1. Set up a MongoDB database and obtain the connection URL.
2. Create a `.env` file in the root directory with the following environment variables:
   ```env
   MONGODB_URI=<your-mongodb-connection-url>
   JWT_SECRET=<your-jwt-secret-key>
   ```

## Usage
1. Start the server:
   ```bash
   npm start
   ```

2. In a new terminal, navigate to the client directory:
   ```bash
   cd client
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

4. Access the application in your browser at [http://localhost:3000](http://localhost:3000).

## About
StudyNotion is a modern and feature-rich EdTech platform, developed with cutting-edge technologies.

## Topics
- Node.js
- API
- ReactJS
- HTML/CSS/JavaScript
- Razorpay API
```
