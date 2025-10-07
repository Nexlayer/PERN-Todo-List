# PERN Todo App - React Frontend

This is the React frontend for the PERN (PostgreSQL, Express, React, Node.js) Todo List application. The app is built with Create React App and styled with Bootstrap.

## Tech Stack

- **React** 18.3.1
- **React Router** 6.28.0
- **Bootstrap** 5.3.3
- **Axios** for API calls
- **Create React App** tooling

## Development

### Prerequisites
- Node.js 18 or higher
- npm

### Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

3. Run tests:
   ```bash
   npm test
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Docker Deployment

The application includes a Dockerfile and nginx configuration for containerized deployment.

### Build Docker Image
```bash
docker build -t pern-todo-react .
```

The Docker container:
- Builds the React app for production
- Serves the static files using nginx
- Includes custom nginx configuration in `default.conf`

## Project Structure

- `src/components/` - React components for the todo app
- `src/App.js` - Main application component
- `public/` - Static assets
- `default.conf` - nginx configuration for Docker deployment
