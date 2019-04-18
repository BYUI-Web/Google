const PORT = process.env.PORT || 5000

var express = require("express");
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});


app.get("/", function (req, res) {
    res.json({ success: true });
    res.end();
});

app.post("/google", function (req, res) {
    if (!req.body) {
        res.sendStatus(400);
        res.end();
    }

    var response = {
        success: true,
        data: req.body
    };

    res.json(response);
    res.end();
});