function Text(text = [""]) {
    this.text = text;
}

function ImageObj(imageUri = "", accessibilityText = "") {
    this.image = {
        imageUri,
        accessibilityText
    };
}

function QuickReplies(title = "", quickReplies = [""]) {
    this.quickReplies = {
        title,
        quickReplies
    };
}

function Button(text = "", postback = "") {
    this.text = text,
        this.postback = postback;
}

function Card(title = "", subtitle = "", imageUri = "", buttons = [new Button()]) {
    this.card = {
        title,
        imageUri,
        buttons
    };
}

function SelectItemInfo(key = "", synonyms = [""]) {
    this.key = key,
        this.synonyms = synonyms;
}

function Item(info = new SelectItemInfo(), title = "", description = "", image = new ImageObj()) {
    this.info = info,
        this.title = title,
        this.description = description,
        this.image = image;
}

function ListSelect(title = "", items = [new Item()]) {
    this.listSelect = {
        title,
        items
    };
}

function CarouselSelect(items = [new Item()]) {
    this.carouselSelect = {
        items
    };
}

/**
 * @param {string} fulfillmentText Fulfilment Text is the text Google will display in the screen
 * @param {Text} textObject Array of sentences the voice could say
 * @param {ImageObj} imageObject ImageObj Object if desired to diplay an image
 * @param {QuickReplies} quickRepliesObject Object of possible quick responses
 * @param {Card} cardObject Card Object if desired to display more cards 
 * @param {ListSelect} listSelectObject ListSelect Object if desired to display a list to select from
 * @param {CarouselSelect} carouselSelectObject CarouselSelect Object if desired to display a carousel with options to select
*/
function ResponseObject(fulfillmentText, textObject, imageObject = undefined, quickRepliesObject = undefined, cardObject = undefined, listSelectObject = undefined, carouselSelectObject = undefined) {
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