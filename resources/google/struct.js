/**
 * The text response message
 * @param {string[]} text The collection of the agent's responses
 */
function Text(text) {
    this.text = {
        text
    };
}

/**
 * The image response message
 * @param {string} imageUri The public URI to an image file
 * @param {string} accessibilityText A text description of the image to be used for accessibility, e.g., screen readers. Required if imageUri is set for CarouselSelect
 */
function ImageObj(imageUri = "", accessibilityText = "") {
    this.image = {
        imageUri,
        accessibilityText
    };
}

/**
 * The quick replies response message
 * @param {string} title The title of the collection of quick replies
 * @param {string[]} quickReplies The collection of quick replies
 */
function QuickReplies(title, quickReplies) {
    this.quick_replies = {
        title,
        quickReplies
    };
}

/**
 * Contains information about a button
 * @param {string} text The text to show on the button
 * @param {string} postback The text to send back to the Dialogflow API or a URI to open
 */
function Button(text = "", postback = "") {
    this.text = text,
        this.postback = postback;
}

/**
 * The card response message
 * @param {string} title The title of the card
 * @param {string} subtitle The subtitle of the card
 * @param {string} imageUri The public URI to an image file for the card
 * @param {Button[]} buttons The collection of card buttons
 */
function Card(title = "", subtitle = "", imageUri = "", buttons = [new Button()]) {
    this.card = {
        title,
        imageUri,
        buttons
    };
}

/**
 * Additional info about the select item for when it is triggered in a dialog
 * @param {string} key A unique key that will be sent back to the agent if this response is given
 * @param {string[]} synonyms A list of synonyms that can also be used to trigger this item in dialog
 */
function SelectItemInfo(key, synonyms = [""]) {
    this.key = key,
        this.synonyms = synonyms;
}

/**
 * An item in the list
 * @param {SelectItemInfo} info Additional information about this option
 * @param {string} title The title of the list item
 * @param {string} description The main text describing the item
 * @param {ImageObj} image The image to display
 */
function Item(info, title, description = "", image = new ImageObj()) {
    this.info = info,
        this.title = title,
        this.description = description,
        this.image = image;
}

/**
 * The card for presenting a list of options to select from
 * @param {string} title (Optional) The overall title of the list.
 * @param {Item[]} items List items
 */
function ListSelect(title = "", items) {
    this.list_select = {
        title,
        items
    };
}

/**
 * The card for presenting a carousel of options to select from
 * @param {Item[]} items Carousel items
 */
function CarouselSelect(items) {
    this.carousel_select = {
        items
    };
}

/**
 * @param {string} fulfillmentText Fulfilment Text is the text Google will display in the screen
 * @param {Text} textObject The text response message
 * @param {ImageObj} imageObject The image response message
 * @param {QuickReplies} quickRepliesObject The quick replies response message
 * @param {Card} cardObject The card response message
 * @param {ListSelect} listSelectObject The card for presenting a list of options to select from
 * @param {CarouselSelect} carouselSelectObject The card for presenting a carousel of options to select from
*/
function ResponseObject(fulfillmentText, textObject = undefined, imageObject = undefined, quickRepliesObject = undefined, cardObject = undefined, listSelectObject = undefined, carouselSelectObject = undefined) {
    this.fulfillmentText = fulfillmentText,
        this.fulfillmentMessages = [
            textObject,
            imageObject,
            quickRepliesObject,
            cardObject,
            listSelectObject,
            carouselSelectObject,
        ],
        this.source = "action-skill-byui";

    this.fulfillmentMessages = this.fulfillmentMessages.filter(function (element) {
        return element != null;
    });
}

module.exports = {
    Text,
    ImageObj,
    QuickReplies,
    Button,
    Card,
    SelectItemInfo,
    Item,
    ListSelect,
    CarouselSelect,
    ResponseObject
};