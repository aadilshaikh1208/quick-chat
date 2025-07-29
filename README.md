# Chat_App

A full-stack real-time chat application built with React, Node.js, Express, MongoDB, and Socket.io. Users can sign up, log in, update their profiles, chat with others, and see online users in real time.

---

## Features

- **User Authentication:** Sign up, log in, and JWT-based session management.
- **Profile Management:** Update profile picture, name, and bio.
- **Real-time Messaging:** Send and receive messages instantly using Socket.io.
- **Online Users:** See who is online in the sidebar.
- **Unseen Messages:** Badge count for unseen messages.
- **Image Uploads:** Profile and message images stored via Cloudinary.
- **Responsive UI:** Built with React and Tailwind CSS.

---

## Tech Stack

- **Frontend:** React, Context API, Axios, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB (Mongoose), Socket.io
- **Authentication:** JWT
- **Image Storage:** Cloudinary

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)

### 1. Clone the repository

```bash
git clone https://github.com/aadilshaikh1208/quick-chat
```

### 2. Install dependencies

#### Server

```bash
cd server
npm install
```

#### Client

```bash
cd ../client
npm install
```

### 3. Environment Variables

#### Server (`server/.env`)

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

#### Client

If you use any environment variables in the client, add them to `client/.env`.

### 4. Run the Application

#### Start the server

```bash
cd server
npm run dev
```

#### Start the client

```bash
cd ../client
npm start
```

The client will run on [http://localhost:3000](http://localhost:3000) and the server on [http://localhost:5000](http://localhost:5000) by default.

---

## Folder Structure

```
Chat_App/
│
├── client/           # React frontend
│   └── src/
│       ├── pages/
│       ├── context/
│       ├── assets/
│       └── ...
│
├── server/           # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── lib/
│   └── ...
│
└── README.md
```

---

## API Endpoints

### Auth

- `POST /api/auth/signup` – Register a new user
- `POST /api/auth/login` – Login

### User

- `PUT /api/user/update-profile` – Update profile (protected)

### Messages

- `GET /api/messages/users` – Get all users except self (protected)
- `GET /api/messages/:id` – Get messages with a user (protected)
- `POST /api/messages/send/:id` – Send message to user (protected)
- `PUT /api/messages/mark/:id` – Mark message as seen (protected)

---

## Notes

- **Authentication:** All protected routes require a valid JWT in the `Authorization` header.
- **Cloudinary:** Used for storing profile and message images.
- **Socket.io:** Used for real-time messaging and online status.

---

## Troubleshooting

- **404 on `/api/messages/users`:**  
  Ensure the backend route exists and is mounted correctly.
- **Cannot read properties of undefined (reading '_id'):**  
  Make sure authentication middleware attaches `req.user` to the request.
- **Cast to ObjectId failed:**  
  Use `User.find` instead of `User.findById` for queries with filters.

---

## License

MIT

---

## Author
