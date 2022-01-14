const express = require('express');

const actionsRouter = require('../api/actions/actions-router')
const projectsRouter = require('../api/projects/projects-router')
const server = express()

// Configure your server here
server.use(express.json())

// Build your actions router in /api/actions/actions-router.js
server.use('/api/actions', actionsRouter)

// Build your projects router in /api/projects/projects-router.js
server.use('/api/projects', projectsRouter)

// Do NOT `server.listen()` inside this file!
server.get('/', (req, res) => {
    res.send(`<h1>Hello to my sprint challenge followers</h1>`)
});

module.exports = server
