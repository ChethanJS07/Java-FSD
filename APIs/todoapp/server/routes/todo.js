const express = require('express');
const todoRouter = express.Router();
const todoController = require('../controllers/todo');
const todo = require('../models/todo');
const {authenticate} = require('../middlewares/authMiddleware');

todoRouter.get('/',todoController.getAllTodos);


todoRouter.post('/',authenticate,todoController.CreateTodo);


todoRouter.patch('/:id',authenticate,todoController.updateTodo);


todoRouter.delete('/:id',authenticate,todoController.deleteTodo);

module.exports = todoRouter;