const TUITION_NON_LDS = 4118;
const TUITION_LDS = 2059;

exports.getAppropriateAnswer = function (incomingIntent, callback = undefined) {
    if (!incomingIntent || !incomingIntent.queryText || !incomingIntent.parameters) {
        return false;
    }

    var responseObj;

    if (incomingIntent.parameters.intent == 'tuition-cost') {

        response = {};

        response_general = `Tuition cost \$${TUITION_NON_LDS} for non-members of the church of Jesus Christ, and \$${TUITION_LDS} per semester for members.`;
        response_lds = `The cost of tuition is \$${TUITION_LDS} per semester for members of the church of Jesus Christ.`;
        response_non_lds = `The cost of tuition is \$${TUITION_NON_LDS} for non-members of the church of Jesus Christ`;

        response.text = `Tuition cost \$${TUITION_NON_LDS} for non-members of the church of Jesus Christ, and \$${TUITION_LDS} per semester for members.`;
        response.reader = (incomingIntent.parameters.lds_membership ? (incomingIntent.parameters.lds_membership == 'membership.non-lds' ? response_non_lds : response_lds) : response_general);

        // responseObj = objectResponse(response);
    }
    if (callback) {
        callback(responseObj);
    } else {
        return responseObj;
    }
}

function objectResponse(response) {
    if (!response.text) {
        return false;
    }
    responseObj = {};
    responseObj.fulfillmentText = response.text;
    responseObj.fulfillmentMessages = [];

    responseObj = {
        "fulfillmentText": response.text,
        "fulfillmentMessages": [
            {
                "text": {
                    "text": [response.reader]
                }
            },
            {
                "image": {
                    "imageUri": "http://www.byui.edu/a/80408",
                    "accessibilityText": ""
                }
            },
            {
                "quickReplies": {
                    "title": "Suggested replies",
                    "quickReplies": [
                        "See more details",
                        "Call financial aid",
                        "Cancel"
                    ]
                }
            }
        ],
        "source": "action-skill-byui"
    }

    return responseObj;
}