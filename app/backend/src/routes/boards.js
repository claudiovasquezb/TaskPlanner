const { Router } = require('express');
const { check } = require('express-validator');

const { getBoards, getBoard, createBoard, updateBoard, deleteBoard } = require('../controllers/boards');
const router = Router();

router.get('/', getBoards);

module.exports = router;