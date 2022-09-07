const express = require("express");
const app = express();
const { db, db_test } = require("./util/db.js");

// Test db connection
db_test(db)

const routeUser = require('./routes/user.js');
const routeMeal = require('./routes/meals.js')

app.listen(3000, () => {
    console.log("server running on port 3000")
});

app.use('/api/v1', routeUser)
app.use('/api/v1', routeMeal)
