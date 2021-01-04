require('dotenv').config();
let express = require('express');
let app = express();


let trip = require('./controllers/FlightController')
let packingList = require('./controllers/PackingListController')
const packingItems = require('./controllers/PackingItemController')
const sequelize = require('./db');
const route = require('./middleware/route')
const user = require('./controllers/UserController')
sequelize.sync();
// sequelize.sync({force:true})

app.use(express.json())
const validateSession = require('./middleware/validatesession')
app.use('/user', user)
app.use('/trip', validateSession,  trip)

app.use('/packingList', packingList)
app.use('/packingItems', packingItems)

app.listen(3000, function() {
    console.log('App is listening on port 3000')
})