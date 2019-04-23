function Text(text = [""]) {
    this.text = text;
}

function ImageObj(imageUri = "", accessibilityText = "") {
    this.imageUri = imageUri,
        this.accessibilityText = accessibilityText;
}

function QuickReplies(title = "", quickReplies = [""]) {
    this.title = title,
        this.quickReplies = quickReplies;
}

function Button(text = "", postback = "") {
    this.text = text,
        this.postback = postback;
}

function Card(title = "", subtitle = "", imageUri = "", buttons = [new Button()]) {
    this.title = title,
        this.imageUri = imageUri,
        this.buttons = buttons;
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
    this.title = title,
        this.items = items;
}

function CarouselSelect(items = [new Item()]) {
    this.items = items;
}

function ResponseObject(fulfillmentText = "", textObject = new Text(), imageObject = new ImageObj(), quickRepliesObject = new QuickReplies(), cardObject = new Card(), listSelectObject = new ListSelect(), carouselSelectObject = new CarouselSelect()) {
    this.fulfillmentText = fulfillmentText,
        this.fulfillmentMessages = [
            textObject,
            imageObject,
            quickRepliesObject,
            cardObject,
            listSelectObject,
            carouselSelectObject
        ],
        this.source = "action-skill-byui";
}