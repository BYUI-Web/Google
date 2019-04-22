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
    res.status(404);
    res.end();
});


app.get("/ping", function (req, res) {
    var today = new Date();
    var response = {
        success: true,
        date_time: {
            miliseconds: today.getTime(),
            utc: today.toUTCString(),
            local: today.toLocaleDateString("en-US", { timeZone: 'America/Denver' }) + ' ' + today.toLocaleTimeString("en-US", { timeZone: 'America/Denver' })
        }
    };

    res.json(response);
    res.end();
});

app.post("/google", function (req, res) {
    if (!req.body) {
        res.sendStatus(403);
        res.end();
    }

    var hook = require('./resources/google/hook');

    response = hook.getAppropriateAnswer(req.body.queryResult);

    res.json(response);

    res.end();
});