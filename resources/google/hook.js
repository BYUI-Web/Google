var Text = require('./struct').Text;
var ImageObj = require('./struct').ImageObj;
var QuickReplies = require('./struct').QuickReplies;
var Button = require('./struct').Button;
var Card = require('./struct').Card;
var SelectItemInfo = require('./struct').SelectItemInfo;
var Item = require('./struct').Item;
var ListSelect = require('./struct').ListSelect;
var CarouselSelect = require('./struct').CarouselSelect;
var ResponseObject = require('./struct').ResponseObject;

const TUITION_NON_LDS = 4118;
const TUITION_LDS = 2059;

var responseObj;

exports.getAppropriateAnswer = function (incomingIntent, callback = undefined) {
    if (!incomingIntent || !incomingIntent.queryText || !incomingIntent.parameters) {
        return false;
    }

    /*************************************************************************************************
     * OBJECT:      Tuition Cost
     * INTENT:      tuition-cost
     * RESPONSES:   Text and image
    *************************************************************************************************/
    if (incomingIntent.parameters.intent == 'tuition-cost') {

        response_general = `Tuition cost \$${TUITION_NON_LDS} for non-members of the church of Jesus Christ, and \$${TUITION_LDS} for members.`;
        response_lds = `The cost of tuition is \$${TUITION_LDS} for members of the church of Jesus Christ.`;
        response_non_lds = `The cost of tuition is \$${TUITION_NON_LDS} for non-members of the church of Jesus Christ`;

        response = (incomingIntent.parameters.lds_membership ? (incomingIntent.parameters.lds_membership == 'membership.non-lds' ? response_non_lds : response_lds) : response_general);

        mytext = new Text([
            response
        ]);

        myimage = new ImageObj("http://www.byui.edu/images/home_page/Ready%20Round%207/7-Welding-Real-World%20HOME.jpg",
            "A student welding, working on a specialized skill with the caption \"Ready for real - world Preparation.\"");

        responseObj = new ResponseObject({ fulfillmentText: mytext.text[0], textObject: mytext, imageObject: myimage });
    }
    /*************************************************************************************************
     * End of Object
    *************************************************************************************************/

    /*************************************************************************************************
     * OBJECT:      Text Example
     * INTENT:      text-example
     * RESPONSES:   Text
    *************************************************************************************************/
    if (incomingIntent.parameters.intent == 'text-example') {
        mytext = new Text([
            "This is the example of an answer",
            "This is another example of a text answer",
            "This is the third example of an answer"
        ]);

        responseObj = new ResponseObject({ fulfillmentText: mytext.text[0], textObject: mytext });
    }
    /*************************************************************************************************
     * End of Object
    *************************************************************************************************/

    /*************************************************************************************************
     * OBJECT:      Image Example
     * INTENT:      image-example
     * RESPONSES:   Image
    *************************************************************************************************/
    if (incomingIntent.parameters.intent == 'image-example') {
        mypicture = new ImageObj("https://www.byui.edu/images/home_page/Ready%20Round%207/7-CountryDancing_WebAds-Belong%20HOME.jpg", "A student country dancing with a caption \"Ready to belong.\"");

        responseObj = new ResponseObject({ fulfillmentText: "Here is an example with a picture", imageObject: mypicture });
    }
    /*************************************************************************************************
     * End of Object
    *************************************************************************************************/

    /*************************************************************************************************
     * OBJECT:      Quick Reply Example
     * INTENT:      quick-replies-example
     * RESPONSES:   Quick Replies
    *************************************************************************************************/
    if (incomingIntent.parameters.intent == 'quick-replies-example') {
        myquickreply = new QuickReplies("Would you like to have dinner?", [
            "Yes",
            "No",
            "I don't know",
            "Perhaps"
        ]);

        responseObj = new ResponseObject({ fulfillmentText: "This is an example of quick replies", quickRepliesObject: myquickreply });
    }
    /*************************************************************************************************
     * End of Object
    *************************************************************************************************/

    /*************************************************************************************************
     * OBJECT:      Card Example
     * INTENT:      card-example
     * RESPONSES:   Card
    *************************************************************************************************/
    if (incomingIntent.parameters.intent == 'card-example') {
        button_home = new Button("Home Page", "https://byui.edu");
        button_financial = new Button("Financial Aid Page", "https://www.byui.edu/financial-aid");
        myimage = new ImageObj("https://www.byui.edu/a/80408", "A woman talking to a man about his financial aid in front of a computer");
        mycard = new Card("This is my card", "This is a subtitle to the card", myimage, [button_home, button_financial]);

        responseObj = new ResponseObject({ fulfillmentText: "This is the example of cards", cardObject: mycard });
    }
    /*************************************************************************************************
     * End of Object
    *************************************************************************************************/

    /*************************************************************************************************
     * OBJECT:      List Select Example
     * INTENT:      list-select-example
     * RESPONSES:   List Select
    *************************************************************************************************/
    if (incomingIntent.parameters.intent == 'list-select-example') {
        myfirstselectiteminfo = new SelectItemInfo("First Item");
        myfirstimage = new ImageObj("https://www.byui.edu/a/80408", "A woman talking to a man about his financial aid in front of a computer");
        myfirstitem = new Item(myfirstselectiteminfo, "This is the title of the 1st item", "This is the description of the 1st item", myfirstimage);

        mysecondselectiteminfo = new SelectItemInfo("Second Item");
        mysecondimage = new ImageObj("https://www.byui.edu/images/home_page/Ready%20Round%207/7-CountryDancing_WebAds-Belong%20HOME.jpg", "A student country dancing with a caption \"Ready to belong.\"");
        myseconditem = new Item(mysecondselectiteminfo, "This is the title of the 2nd item", "This is the description of the 2nd item", mysecondimage);

        mylist = new ListSelect("This is the title of the List Select", [myfirstitem, myseconditem]);

        responseObj = new ResponseObject({ fulfillmentText: "This is the example of the List Select", listSelectObject: mylist });
    }
    /*************************************************************************************************
     * End of Object
    *************************************************************************************************/

    /*************************************************************************************************
     * OBJECT:      Carousel Select Example
     * INTENT:      carousel-select-example
     * RESPONSES:   Carousel Select
    *************************************************************************************************/
    if (incomingIntent.parameters.intent == 'carousel-select-example') {
        myfirstselectiteminfo = new SelectItemInfo("First Item");
        myfirstimage = new ImageObj("https://www.byui.edu/a/80408", "A woman talking to a man about his financial aid in front of a computer");
        myfirstitem = new Item(myfirstselectiteminfo, "This is the title of the 1st item", "This is the description of the 1st item", myfirstimage);

        mysecondselectiteminfo = new SelectItemInfo("Second Item");
        mysecondimage = new ImageObj("https://www.byui.edu/images/home_page/Ready%20Round%207/7-CountryDancing_WebAds-Belong%20HOME.jpg", "A student country dancing with a caption \"Ready to belong.\"");
        myseconditem = new Item(mysecondselectiteminfo, "This is the title of the 2nd item", "This is the description of the 2nd item", mysecondimage);

        mycarousel = new CarouselSelect([myfirstitem, myseconditem]);

        responseObj = new ResponseObject({ fulfillmentText: "This is the example of the Carousel Select", carouselSelectObject: mycarousel });
    }
    /*************************************************************************************************
     * End of Object
    *************************************************************************************************/

    if (callback) {
        callback(responseObj);
    } else {
        return responseObj;
    }
}