const express = require('express');
const routes = express.Router();
const playedController = require('./controllers/playedController');

//Rota para executar a funcao de analisar jogadas
routes.post('/play',playedController.play)

module.exports = routes;