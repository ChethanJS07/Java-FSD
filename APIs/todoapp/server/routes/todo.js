const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');
const todo = require('../models/todo');


router.get('/',todoController.getAllTodos);


router.post('/',todoController.CreateTodo);


router.patch('/:id',todoController.updateTodo);


router.delete('/:id',todoController.deleteTodo);

module.exports = router;