# Todo App

A simple Todo application built with Node.js, Express.js, and SQLite. It features user authentication, protected routes, and a modern frontend.

## Features
- User registration and login (JWT authentication)
- Add, view, update, and delete todos
- Protected API endpoints
- SQLite in-memory database (for demo purposes)
- Simple HTML/CSS frontend

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd todo-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `src/config/` with the following content:
   ```env
   PORT=5003
   JWT_SECRET=your_jwt_secret
   ```

### Running the App
```bash
npm run dev
```
The server will start on `http://localhost:5003`.

### API Endpoints
- `POST /auth/register` — Register a new user
- `POST /auth/login` — Login and receive a JWT
- `GET /todos` — Get all todos (requires Authorization header)
- `POST /todos` — Add a new todo (requires Authorization header)
- `PUT /todos/:id` — Update a todo (requires Authorization header)
- `DELETE /todos/:id` — Delete a todo (requires Authorization header)

### REST Client Example
See `todo-app.rest` for example requests you can use with the REST Client extension in VS Code.

### Frontend
Open `public/index.html` in your browser for a simple UI.

## Notes
- The database is in-memory and resets on server restart.
- Make sure to use the correct JWT token in the `Authorization` header as `Bearer <token>` for protected routes.

## Acknowledgments

- Inspired by the [Backend Full Course | NodeJS ExpressJS PostgreSQL Prisma & Docker](https://www.youtube.com/watch?v=9BD9eK9VqXA) tutorial by [Smoljames](https://www.youtube.com/@smoljames).  
- This project was created as a learning exercise, with adjustments and modifications made along the way.

## License
MIT
