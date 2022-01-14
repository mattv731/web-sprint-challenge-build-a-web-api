// add middlewares here related to actions
const Actions = require('./actions-model')

async function validateActionId(req, res, next) {
    try {
        const action = await Actions.get(req.params.id)
        if(!action) {
            res.status(404).json({message: "Invalid Action ID"})
        } else {
            next()
        }
    }
    catch (err) {
        res.status(500).json({ message: "Error status 500"})
    }
}

module.exports = {
    validateActionId,
}