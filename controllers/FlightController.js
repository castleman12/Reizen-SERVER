const router = require('express').Router();
const Trip = require('../db').import('../models/trips');

router.use(require('../middleware/headers'))

router.post('/', (req, res)=> {
  const addFlight = {
    FlightFrom: req.body.FlightFrom,
    FlightTo: req.body.FlightTo,
    ArrivalDate: req.body.ArrivalDate,
    ReturnDate: req.body.ReturnDate
  }
  Trip.create(addFlight)
    .then(flight => res.status(200).json(`A flight from ${flight.FlightFrom} to ${flight.FlightTo} has been added to your flight list!`))
    .catch(err => res.status(500).json({ error: err}))
})


//** GET ENTRIES BY USERID **/
router.get("/user", (req, res) => {
    Trip.findAll({
        where: { UserID: req.user.id}
    })
    .then(flight => res.status(200).json(flight))
    .catch(err => res.status(500).json({ error: err }))
})


//** DELETE **/
router.delete("/delete/:id", function (req, res) {
    const query = { where: { id: req.params.id, UserID: req.user.id}};

    Trip.destroy(query)
    .then(() => res.status(200).json({ message: "Trip removed!"}))
    .catch((err) => res.status(500).json({ error: err}))

})


// router.put('/:id', function(req, res){
//   const updateTrip = {
//     watched: req.body.watched
//   };

//   const query = {where: {id: req.params.id, userId: req.user.id}};

//   Watchlist.update(updateWatchlistFilm, query)
//   .then(() => res.status(200).json({message: "Changed Watched status!"}))
//   .catch((err) => res.status(500).json({ error: err}));
      
// });

module.exports = router;