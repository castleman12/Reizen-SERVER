const router = require('express').Router();
const packingItems = require('../db').import('../models/packingItems')
const packingList = require('../db').import('../models/packingList');

router.use(require('../middleware/headers'))

router.post('/', (req, res)=> {
  const addList = {
        TripID: req.body.TripID
  }
  packingList.create(addList)
    .then(list => res.status(200).json(`Flight Packing List Added!`))
    .catch(err => res.status(500).json({ error: err}))
})


//** GET ENTRIES BY USERID **/
router.get("/lists", (req, res) => {
    packingList.findAll({
        where: { TripID: req.body.TripID}
    })
    .then(list => res.status(200).json(list))
    .catch(err => res.status(500).json({ error: err }))
})


//** DELETE **/
router.delete("/delete/:id", function (req, res) {
    const query = { where: { id: req.params.id}};

    packingList.destroy(query)
    .then(() => res.status(200).json({ message: "List removed!"}))
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