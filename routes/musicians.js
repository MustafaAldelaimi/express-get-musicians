const express = require("express");
const router = express.Router();
const {Musician} = require("../Musician")
const {sequelize} = require("../db")
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
      
router.post('/', async (req, res) => {
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