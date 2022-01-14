// Write your "projects" router here!
const express = require('express');
const Projects =  require('../projects/projects-model');

const router = express.Router();

router.get('/',  (req, res, next) => {
        Projects.get()
        .then(project => {
            res.json(project)
        }) 
        .catch(err => {
            console.log(err)
        })
            
})

router.get('/:id', (req, res, next) => {
    Projects.get(req.params.id)
        .then(project => {
            res.json(project)
        }) 
        .catch(err => {
            console.log(err)
        })
})
module.exports = router;