// Write your "actions" router here!
const express = require('express');
const Actions = require('./actions-model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Actions.get(res.body)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        console.log(err)
    })
});


module.exports = router;