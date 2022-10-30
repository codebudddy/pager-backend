const router = require('express').Router();

const { register, login } = require('../controllers/authControllers');

router.post('/register');
router.post('/login');

module.exports = router;
