const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(3000, () => {
    console.log("server started at port 3000");
});