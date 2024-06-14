const { Router } = require('express');
const { check } = require('express-validator');

const { getBoards, getBoard, createBoard, updateBoard, deleteBoard, getBoardsList } = require('../controllers/boards');
const { validateJWT } = require('../middlewares/validate-jwt');
const { validateFields } = require('../middlewares/validate-field');

const router = Router();

router.use(validateJWT);

router.get('/', getBoards);
router.post('/',
    [
        check('title', 'Title is required').not().isEmpty(),
        validateFields
    ], createBoard);
router.get('/list/:id', getBoardsList);

module.exports = router;