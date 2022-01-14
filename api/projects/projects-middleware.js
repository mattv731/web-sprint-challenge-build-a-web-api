// add middlewares here related to projects
const Project = require('./projects-model')

async function validateProjectId(req, res, next) {
    try {
        const project = await Project.get(req.params.id)
        if(!project) {
            res.status(404).json({
                message: "invalid project ID"
            })
        } else {
        next()
        }
    }catch (err){
        res.status(500).json({message: `error status 500 ${err}`})
}
}

async function validateProjectBody(req, res, next) {
    try {
        const { name } = await req.body
        const { description } = req.body
        if (!name || !description) {
            res.status(400).json({
                message: "Error request body must have name and description"
            })
        } else {
            next()
        }
    }
    catch (err) {
        res.status(500).json({message: `error status 500 ${err}`})
    }
}

module.exports = {
    validateProjectId,
    validateProjectBody
}