require('dotenv').config();
let express = require('express');
let app = express();
const db = require("./db");

let trip = require('./controllers/FlightController')

const packingItems = require('./controllers/PackingItemController')
const sequelize = require('./db');
const route = require('./middleware/route')
const user = require('./controllers/UserController')
sequelize.sync();
//sequelize.sync({force:true})

app.use(express.json())
const validateSession = require('./middleware/validatesession')
app.use(require('./middleware/headers'));

app.use('/user', user)
app.use('/trip', validateSession,  trip)
app.use('/packingItems', validateSession, packingItems)

db.authenticate()
  .then(() => db.sync() )  // => (force: true)
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`[Server: ] App is listening on Port ${process.env.PORT}`));  
  })
  .catch((err) => {console.log(err)
  })
