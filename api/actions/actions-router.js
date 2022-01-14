// Write your "actions" router here!
const express = require('express');
const { validateActionId } = require('./actions-middlware')
const Actions = require('./actions-model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Actions.get(res.body)
    .then(action => {
        res.json(action)
    })
    .catch(next)
});

router.get('/:id', validateActionId, (req, res, next) => {
    Actions.get(req.params.id)
    .then(action => {
        res.json(action)
    })
    .catch(next)
})

router.post('/', (req, res) => {
    const { notes } = req.body
    const { description } = req.body
    const { project_id } = req.body
    if (!notes || !description || !project_id) {
        res.status(400).json({ message: "Error status 400"})
    } else {
        Actions.insert(req.body)
        .then(action => {
            res.json(action)
        })
        .catch(err => console.log(err))
    }
})

router.put('/:id', validateActionId, (req, res, next) => {
    const { notes } = req.body
    const { description } = req.body
    const { project_id } = req.body
    const { completed } = req.body
    if (!notes || !description || !project_id || typeof completed !== "boolean" ) {
        res.status(400).json({ message: "Error status 400"})
    } else {
        Actions.update(req.params.id, req.body)
        .then(action => {
            res.json(action)
        })
        .catch(err => console.log(err))
    }
})

router.delete('/:id', validateActionId, (req, res, next) => {
    Actions.remove(req.params.id)
    .then(action => {
        res.json(action)
    })
    .catch(next)
})

module.exports = router;