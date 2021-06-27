const express = require('express')
const QuestionControllers = require('./controllers/QuestionControllers')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req,res) => res.render("index", {page: 'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionControllers.create)
//Formato que o formulário dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action', QuestionControllers.index)

module.exports = route