const express = require('express');
const router = express.Router();
const inventory = require('../controllers/product.js');


//Inventory total products
router.get('/api/inventory/stock_total', inventory.totalInvenorty);

//Inventory by product
router.get('/api/inventory/stock_by_product/:sku', inventory.by_product);

module.exports = router;