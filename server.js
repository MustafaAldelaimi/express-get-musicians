const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

//TODO

app.get('/musicians/:id', async (req, res) => {
    const musicians = await Musician.findByPk(req.params.id);
    res.json(musicians);
})

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})