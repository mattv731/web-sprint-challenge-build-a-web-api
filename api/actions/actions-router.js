// Write your "actions" router here!
const express = require('express');
const Actions = require('./actions-model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Actions.get(res.body)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(next)
});

router.get('/:id', (req, res, next) => {
    Actions.get(req.params.id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Actions.insert(req.body)
    .then(action => {
        res.json(action)
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
    Actions.update(req.params.id, req.body)
    .then(action => {
        res.json(action)
    })
})

module.exports = router;