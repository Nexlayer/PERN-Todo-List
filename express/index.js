const express = require('express')
const Pool = require('pg').Pool
const cors = require('cors')
require('dotenv').config();

var app = express();
app.use(cors());
app.use(express.json());

// Standard Express port - configurable for deployment
const port = process.env.PORT || 3000;

// Connect to the postgres database
const pool = new Pool({
    user: process.env.POSTGRES_USERNAME,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
})

// Get saved tasks from the database
app.get("/api/getTodoList", (req, res) => {
    pool.query('SELECT * FROM todos ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
});

// Add new task to the database
app.post("/api/addTodoList", (req, res) => {
    const { task, status, deadline } = req.body

    pool.query('INSERT INTO todos (task, status, deadline) VALUES ($1, $2, $3) RETURNING *', [task, status, deadline], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
});

// Update task fields (including deadline)
app.post("/api/updateTodoList/:id", (req, res) => {
    const id = req.params.id;
    const { task, status, deadline } = req.body

    pool.query(
        'UPDATE todos SET task = $1, status = $2, deadline = $3 WHERE id = $4',
        [task, status, deadline, id],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`User modified with ID: ${id}`)
        }
    )
});

// Delete task from the database
app.delete("/api/deleteTodoList/:id", (req, res) => {
    const id = req.params.id;

    pool.query('DELETE FROM todos WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`User deleted with ID: ${id}`)
    })
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});