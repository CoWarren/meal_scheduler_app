const { DataTypes } = require('sequelize');
const { db } = require("../util/db.js");


module.exports.User = User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    tableName: 'Users'
})

// the defined model is the class itself
console.log(User === db.models.User); // true