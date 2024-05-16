const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUser } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-field');

const router = Router();

router.post('/register', 
[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be at least 6 characters long').isLength({min:6}),
    validateFields
],
createUser);

router.post('/', loginUser);
router.get('/renew');


module.exports = router;