# Express User Management API Server

A simple Express.js API server for managing users with in-memory data storage.

## Features

- GET `/` - root endpoint to verify the server is running
- GET `/users` - return the list of users
- POST `/users` - add a new user to the in-memory user list
- GET `/contact` - simple contact endpoint

## Requirements

- Node.js installed
- npm available

## Install

```bash
npm install
```

## Run

```bash
node index.js
```

The server listens on port `1996` by default or `process.env.PORT` if configured.

## API Endpoints

### GET `/`

Returns a plain text greeting:

```json
Hello from user world!
```

### GET `/users`

Returns the current user list:

```json
[
  {"id": 1, "name": "Akash", "email": "akash@gmail.com"},
  {"id": 2, "name": "Bkash", "email": "bkash@gmail.com"},
  {"id": 3, "name": "Ckash", "email": "ckash@gmail.com"}
]
```

### POST `/users`

Adds a new user. Send JSON in the request body:

```json
{
  "name": "New User",
  "email": "newuser@example.com"
}
```

Response example:

```json
{
  "success": true,
  "data": {
    "id": 4,
    "name": "New User",
    "email": "newuser@example.com"
  },
  "message": "User added successful"
}
```

### GET `/contact`

Returns a plain text message:

```json
Users contact!
```

## Notes

- The project uses `express` and `cors`.
- User data is stored in memory, so it resets when the server restarts.
- The API currently uses a local array and is not connected to a database.
