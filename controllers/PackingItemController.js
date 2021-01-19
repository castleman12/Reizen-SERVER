

const router = require('express').Router();
const packingItems = require('../db').import('../models/packingItems')
const trip = require('../db').import('../models/trips')

router.use(require('../middleware/headers'))


router.post('/', (req, res)=> {
  const addItem = {
      ItemName: req.body.ItemName,
      userId: req.user.id
      }
  packingItems.create(addItem)
    .then(Item => res.status(200).json(`${Item.ItemName} added to list!`))
    .catch(err => res.status(500).json({ error: err}))
})


//** GET ENTRIES BY FLIGHTID **/
router.get("/user/:id", (req, res) => {
  packingItems.findAll({
      where: { userId: req.user.id},
      include: ['user']
  })
  .then(items => res.status(200).json(items))
  .catch(err => res.status(500).json({ error: err }))
})



//** DELETE **/
router.delete("/delete/:id", function (req, res) {
    const query = { where: { id: req.params.id}};

    packingItems.destroy(query)
    .then(() => res.status(200).json({ message: "Item removed!"}))
    .catch((err) => res.status(500).json({ error: err}))

})


router.put('/:id', function(req, res){
  const updateItem = {
    ItemName: req.body.ItemName
  };

  const query = {where: {id: req.params.id}};

  packingItems.update(updateItem, query)
  .then(() => res.status(200).json({message: "Changed Item!"}))
  .catch((err) => res.status(500).json({ error: err}));
      
});

module.exports = router;