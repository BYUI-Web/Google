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

    var responseObj;

    // console.log("here 0");

    if (req.body.queryResult.parameters.intent == 'tuition-cost') {

        // console.log("here 1");

        tuition_non_lds = 4118;
        tuition_lds = 2059;

        response_general = `Tuition cost ${tuition_non_lds} dollars for non-members of the church of Jesus Christ, and ${tuition_lds} dollars per semester for members.`;
        response_lds = `The cost of tuition is ${tuition_lds} dollars per semester for members of the church of Jesus Christ.`;
        response_non_lds = `The cost of tuition is ${tuition_non_lds} dollars for non-members of the church of Jesus Christ`;

        response = (req.body.queryResult.parameters.lds_membership ? (req.body.queryResult.parameters.lds_membership == 'membership.non-lds' ? response_non_lds : response_lds) : response_general);
        
        // console.log("here 2", req.body.queryResult.parameters.lds_membership);
        
        responseObj = {
            "fulfillmentText": response
            ,
            "fulfillmentMessages": [
                {
                    "text": {
                        "text": [
                            response
                        ]
                    }
                }
            ],
            "source": "action-skill-byui"
        }

    }

    // console.log("Request: ", req.body);

    res.json(responseObj);

    res.end();
});