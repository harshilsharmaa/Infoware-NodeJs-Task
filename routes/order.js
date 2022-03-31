const express = require('express');
const { isAdmin, isAuthenticated } = require('../middleware/auth');

const {allOrders, orderById, orderByUserId, myOrders} = require('../controllers/order');

const router = express.Router();

router.route('/my').get(isAuthenticated ,myOrders);
router.route('/all').get(isAuthenticated ,isAdmin, allOrders);
router.route('/:id').get(isAuthenticated ,isAdmin, orderById);
router.route('/user/:id').get(isAuthenticated ,isAdmin, orderByUserId);



module.exports = router;