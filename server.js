const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")
app.use(express.json())
const port = 3000;

//TODO

app.get('/musicians/:id', async (req, res) => {
    const musicians = await Musician.findByPk(req.params.id);
    res.json(musicians);
})

app.post('/musicians', async (req, res) => {
    const musician = await Musician.create(req.body);
    res.send(musician);
})

app.put('/musicians/:id', async (req, res) => {
    const musician = await Musician.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.json(musician);
})

app.delete('/musicians/:id', async (req, res) => {
    const musician = await Musician.findByPk(req.params.id);
    musician.destroy();
    res.json(musician);
})

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})