const express = require('express');
const { isAdmin, isAuthenticated } = require('../middleware/auth');

const {addProduct, addExistingProduct, allProducts, buyProduct} = require('../controllers/product');

const router = express.Router();

router.route('/add').post(isAuthenticated ,isAdmin, addProduct);
router.route('/add/:id').post(isAuthenticated ,isAdmin, addExistingProduct);
router.route('/all').get(isAuthenticated , allProducts);
router.route('/buy/:id').post(isAuthenticated , buyProduct);


module.exports = router;