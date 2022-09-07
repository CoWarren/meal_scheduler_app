const express = require('express');
const router = express.Router();

// Meals routes
const ROUTE = '/meal'

// Get a meal
router.get(ROUTE, (req, res, next) => {
    res.json({'message': 'This is a test'});
});

// Create a meal
router.post(ROUTE, (req, res, next) => {
    res.json({'message': 'Post is a test'});
});

// Update a meal
router.patch(ROUTE, (req, res, next) => {
    res.json({'message': 'Update is a test'});
});

// Delete a meal
router.delete(ROUTE, (req, res, next) => {
    res.json({'message': 'Delete is a test'});
});

module.exports = router;