const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/api/todos", todoRoutes);
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.listen(3000, () => {
    console.log("server started at port 3000");
});