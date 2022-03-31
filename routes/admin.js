const express = require('express');

const router = express.Router();

const {isAuthenticated, isAdmin} = require('../middleware/auth');

const {addAdmin} = require('../controllers/admin');

router.route("/add/admin/:id").post(isAuthenticated, isAdmin, addAdmin);


module.exports = router;