var Text = require('./struct').Text;
var ImageObj = require('./struct').ImageObj;
var ResponseObject = require('./struct').ResponseObject;

const TUITION_NON_LDS = 4118;
const TUITION_LDS = 2059;

exports.getAppropriateAnswer = function (incomingIntent, callback = undefined) {
    if (!incomingIntent || !incomingIntent.queryText || !incomingIntent.parameters) {
        return false;
    }

    var responseObj;

    if (incomingIntent.parameters.intent == 'tuition-cost') {

        response_general = `Tuition cost \$${TUITION_NON_LDS} for non-members of the church of Jesus Christ, and \$${TUITION_LDS} per semester for members.`;
        response_lds = `The cost of tuition is \$${TUITION_LDS} per semester for members of the church of Jesus Christ.`;
        response_non_lds = `The cost of tuition is \$${TUITION_NON_LDS} for non-members of the church of Jesus Christ`;

        response = (incomingIntent.parameters.lds_membership ? (incomingIntent.parameters.lds_membership == 'membership.non-lds' ? response_non_lds : response_lds) : response_general);

        mytext = new Text([
            response
        ]);

        myimage = new ImageObj("http://www.byui.edu/images/home_page/Ready%20Round%207/7-Welding-Real-World%20HOME.jpg",
            "A student welding, working on a specialized skill with the caption \"Ready for real - world Preparation.\"");

        responseObj = new ResponseObject(mytext.text[0], textObject = mytext, imageObject = myimage);
    }
    if (callback) {
        callback(responseObj);
    } else {
        return responseObj;
    }
}