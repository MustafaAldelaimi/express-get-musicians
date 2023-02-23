const express = require("express");
const router = express.Router();
const {Musician} = require("../Musician")
const {check, validationResult} = require("express-validator");
router.use(express.json())

//TODO

router.get('/:id', async (req, res) => {
          const musicians = await Musician.findByPk(req.params.id);
          res.json(musicians);
})

router.get('/', async (req, res) => {
          const musicians = await Musician.findAll();
          res.json(musicians);
})
      
router.post('/', [
          check('name', 'Name is required').not().isEmpty().trim(),
          check('instrument', 'Instrument is required').not().isEmpty().trim(),
          check('name', 'Too long or short').isLength({min: 2, max: 20}),
], 
          async (req, res) => {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
              return res.send({errors: errors.array()});
          }
          const musician = await Musician.create(req.body);
          res.send(musician);
})
      
router.put('/:id', async (req, res) => {
          const musician = await Musician.update(req.body, {
              where: {
                  id: req.params.id
              }
          });
          res.json(musician);
})
      
router.delete('/:id', async (req, res) => {
          const musician = await Musician.findByPk(req.params.id);
          musician.destroy();
          res.json(musician);
})

module.exports = router;