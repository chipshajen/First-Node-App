const { Router } = require('express')
const messageController = require('../controllers/messageController')

const indexRouter = Router()

indexRouter.get('/', messageController.getMessages)
indexRouter.get('/new', messageController.showForm)
indexRouter.post('/new', messageController.addMessage)
    

module.exports = indexRouter