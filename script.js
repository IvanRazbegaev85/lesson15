const DomElement = function (selector, height, width, bg) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.squarePosition = '';

    let element;

    this.createElement = function () {
        if(this.selector.startsWith(".")){
            element = document.createElement('div');
            element.classList = this.selector.split("").map((value, index) => {
                return index === 0 ? '' : value;
            }).join("");
            element.style.height = `${this.height}px`;
            element.style.width = `${this.width}px`;
            element.style.backgroundColor = this.bg;
            element.style.position = this.squarePosition;
            document.body.append(element);
        } else if(this.selector.startsWith("#")) {
            element = document.createElement('p');
            console.log();
            element.id = this.selector.split("").map((value, index) => {
                return index === 0 ? '' : value;
            }).join("");
            element.style.height = `${this.height}px`;
            element.style.width = `${this.width}px`;
            element.style.backgroundColor = this.bg;
            element.style.position = this.squarePosition;
            document.body.append(element);
        }
    };
}

const domElement = new DomElement("#block", 100, 100, "black");

domElement.setPosition = function (position) {
    domElement.squarePosition = position;
    return this;
};

domElement.setPosition('absolute').createElement();
const square = document.querySelector('p');

document.addEventListener("keydown", function (event) {
    if(event.keyCode === 38   ){
        console.log("arrowUp is pressed!")
        square.remove();
        domElement.height -= 10;
        domElement.createElement();
    }
})


console.log(square)