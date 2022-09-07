const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { User } = require('../models/user.js')

// User routes
const ROUTE = '/user'

// Temp Database
const USER_DB = [
    {'id': 1, 'name': 'Ryan'},
    {'id': 2, 'name': 'Chris'}
]

// Get a user
router.get(`${ROUTE}/:id`, async (req, res, next) => {
    var id = Number(req.params.id)
    const x = await User.findOne({ where: { id: id } });
    if (x === null)
        return res.status(404).json({'message': 'User couldn\'t be found!'});
    return res.json(x)
});

// Create a user
router.post(ROUTE, async (req, res, next) => {
    const ryan = User.build(
        {
            firstName: "Ryan",
            lastName: "Clark"
        }
    );
    console.log(ryan instanceof User); // true
    console.log(ryan.lastName); // "Jane"
    await ryan.save();
    console.log('Ryan was saved to the database!');
    // res.json(ryan.toDict())
});

// Update a user
router.patch(ROUTE, (req, res, next) => {
    res.json({'message': 'Update is a test'});
});

// Delete a user
router.delete(ROUTE, (req, res, next) => {
    res.json({'message': 'Delete is a test'});
});

// Users Routes
router.get(`${ROUTE}s`, async (req, res, next) => {
    res.json(
        await User.findAll({limit: 10})
    )
});
module.exports = router;