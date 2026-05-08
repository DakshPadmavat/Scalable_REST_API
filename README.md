# Scalable REST API

A full-stack task management application built with Node.js, Express, Prisma, and React. This project demonstrates a scalable architecture with a clear separation of concerns between the backend and frontend.

## Project Structure

```text
.
├── backend/          # Node.js Express API
├── frontend/         # React + Vite application
└── SCALABILITY.md    # Documentation on scaling strategies
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables (see [Environment Variables](#environment-variables)).
4. Run Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

### Backend (`backend/.env`)
| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@localhost:5432/db` |
| `JWT_SECRET` | Secret key for JWT signing | `your_secret_key` |
| `PORT` | Backend server port | `5000` |

## API Routes

### Authentication (`/api/v1/auth`)
- `POST /register`: Register a new user
- `POST /login`: Login and receive JWT

### Tasks (`/api/v1/tasks`)
- `GET /`: Retrieve all tasks for the logged-in user
- `POST /`: Create a new task
- `PUT /:id`: Update an existing task
- `DELETE /:id`: Delete a task

### Documentation
- Swagger UI: `http://localhost:5000/api-docs`

## Deployment Links
- **Frontend:** [Link to Frontend]
- **Backend API:** [Link to Backend API]
- **API Documentation:** [Link to API Docs]

---
For details on how this project can be scaled, see [SCALABILITY.md](./SCALABILITY.md).
