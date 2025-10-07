# PERN-Todo-List
Simple PERN todo list app (similar to my MERN todo list app but with Postgres instead of MongoDB)

## Project Structure

This application consists of three main components:
- **PostgreSQL**: Database (Postgres 17 Alpine)
- **Express**: Backend API server (Node.js 18 Alpine)
- **React**: Frontend UI (Create React App with Bootstrap)

Each component is containerized with Docker and can be built and deployed independently.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <Github-repository-URL>
   cd PERN-Todo-List
   ```

2. **Build Docker images**:
   ```bash
   # Build PostgreSQL image
   cd postgres
   docker build -t pern-todo-postgres .

   # Build Express backend image
   cd ../express
   docker build -t pern-todo-express .

   # Build React frontend image
   cd ../react/pern-todo-app
   docker build -t pern-todo-react .
   ```

3. **Run the containers**:
   - Configure environment variables as needed for database connections
   - Run PostgreSQL container first
   - Run Express backend (ensure it can connect to PostgreSQL)
   - Run React frontend with nginx (ensure it can connect to Express API)

## Development

Each component can be developed independently:

- **Express backend**: See `express/` directory
- **React frontend**: See `react/pern-todo-app/` directory
- **PostgreSQL**: See `postgres/` directory for database schema
