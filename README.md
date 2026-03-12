# UrbanAlert API

## Description

UrbanAlert is a REST API designed to allow citizens to report urban issues such as garbage accumulation, damaged streetlights, and other public infrastructure problems.

The system helps city authorities monitor and manage reported incidents more efficiently by collecting and organizing reports from users depending the grade of the issues.

This project follows an **N-Layer architecture** to separate responsibilities between routes, controllers, models, and middleware, improving maintainability and scalability.

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Supabase
* JSON Web Token (JWT)
* dotenv
* bcrypt

---

## Project Structure

```
urbanalert-api
│
├── src
│   ├──config
│   │      database.js
│   │ 
│   ├── controllers
│   │      authController.js
│   │      reportcontroller.js
│   │
│   ├── middlewares
│   │      auth.js
│   │
│   ├── models
│   │      Reports.js
│   │      Usuario.jsauth.js
│   │
│   │
│   └── routes
│         auth.routes.js
│         report.routes.js
│   
├── .env.template
├── package.json
├── package-lock.json
├── Index.js
└── README.md
```

## Installation Guide

### 1. Clone the repository

```
git clone https://github.com/yourusername/urbanalert-apiexamen.git
```

### 2. Navigate to the project folder

```
cd urbanalert-apiexamen
```

### 3. Install dependencies

```
npm install
```

### 4. Configure environment variables

Create a `.env` file based on `.env.template`.

Example:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/urbanalert
JWT_SECRET=your_secret_key
```

### 5. Run the server

```
npm start
```

The API will run on:

```
http://localhost:3000
```

---

## Authentication

The API uses **JWT (JSON Web Token)** for authentication.

After logging in, the server returns a token that must be included in protected requests.

Example header:

```
Authorization: Bearer YOUR_TOKEN
```

---

## Main Endpoints

### Authentication

Register a new user

```
POST /auth/register
```

Login user

```
POST /auth/login
```

---

### Reports

Get all reports

```
GET /reports
```

Create a new report

```
POST /reports
```

---

## Example Report Object

```
{
  "title": "Broken TrafficLight",
  "description": "TrafficLight not working near the neighbourhood",
  "location": "Downtown"
}
```

---

## Author

Ivan Omar Chavez Baez ID 2683

