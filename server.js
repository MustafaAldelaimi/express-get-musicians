const express = require("express");
const app = express();
const musiciansRouter = require("./routes/musicians");
const {sequelize} = require("./db")
app.use(express.json())
const port = 3000;

app.use("/musicians", musiciansRouter);

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})