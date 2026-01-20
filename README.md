# Auth API

A backend authentication API built with **Node.js**, **Express**, and **MongoDB**, focused on learning and demonstrating core backend concepts such as authentication, database integration, and API structure.

---

## Features

- User registration
- User login
- Password hashing with bcrypt
- JWT-based authentication
- MongoDB Atlas integration
- Environment variable configuration
- Modular and scalable project structure

---

## Tech Stack

- **Node.js**
- **Express**
- **MongoDB** (Atlas)
- **Mongoose**
- **JWT (JSON Web Tokens)**
- **bcrypt**
- **dotenv**
- **nodemon**

---

## Project Structure

```text
auth-api/
├── src/
│ ├── controllers/
│ │ └── auth.controller.js
│ ├── routes/
│ │ └── auth.routes.js
│ ├── models/
│ │ └── User.js
│ ├── config/
│ │ └── db.js
│ ├── app.js
│ └── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.me
```

---

## Setup & Installation

### Clone the repository
```bash
git clone https://github.com/joaonecunde/auth-api.git
cd auth-api
```

---

## Install dependencies
```bash
npm install
```

---

## Create a .env file
```bash
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
---

## Authentication Flow

- User registers with email and password

- Password is hashed using bcrypt

- User logs in with valid credentials

- API returns a JWT token

- Token can be used to access protected routes

---

## API Endpoints
### Register User
### POST `/auth/register`
```json
{
  "name": "Max Doe",
  "email": "max@test.com",
  "password": "123456"
}
```

---

## Login User
### POST `/auth/login`
```json
{
  "email": "max@test.com",
  "password": "123456"
}
```
---

## Response:
```json
{
  "token": "jwt_token_here"
}
```
---

## Testing the API

You can test the API using tools like:

- Insomnia
- Postman

Make sure to send requests with:
```pgsql
Content-Type: application/json
```

---

## Security Notes

- Passwords are never stored in plain text
- JWT secrets are stored in environment variables
- MongoDB credentials are not exposed

---
## Author

João Necunde

GitHub: [https://github.com/joaonecunde](https://github.com/joaonecunde)

LinkedIn: [https://www.linkedin.com/in/joaonecunde/](https://www.linkedin.com/in/joaonecunde/)











