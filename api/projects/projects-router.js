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

router.post('/', (req, res, next) => {
    Projects.insert(req.body)
    .then(project => {
        res.json(project)
    })
    .catch(err => {
        console.log(err)
    })
})

router.put('/:id', (req, res, next) => {
    Projects.update(req.params.id, req.body)
    .then(() => {
        return Projects.get(req.params.id)
    })
    .then(project => {
        res.json(project)
    })
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
    Projects.remove(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})

router.get('/:id/actions', (req, res, next) => {
    Projects.getProjectActions(req.params.id)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch (next)
})

module.exports = router;