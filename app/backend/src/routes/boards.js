const { Router } = require('express');
const { check } = require('express-validator');

const { getBoards, getBoard, createBoard, updateBoard, deleteBoard } = require('../controllers/boards');
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router();

router.use(validateJWT);

router.get('/', getBoards);
router.get('/:id', getBoard);
router.post('/', createBoard);

module.exports = router;