const DomElement = function (selector, height, width, bg) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.squarePosition = '';
    this.top = 0;
    this.left = 0;

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
            element.style.top = `${this.top}`;
            element.style.left = `${this.left}`;
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
            element.style.top = `${this.top}`;
            element.style.left = `${this.left}`;
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
let square = document.querySelector('p');

document.addEventListener("keydown", function (event) {
    if(event.keyCode === 38){
        square = document.querySelector('p');
        console.log("arrowUp is pressed!")
        square.remove();
        domElement.top -= 10;
        domElement.createElement();
    } else if(event.keyCode === 37){
        square = document.querySelector('p');
        console.log("arrowLeft is pressed!")
        square.remove();
        domElement.left -= 10;
        domElement.createElement();
    } else if(event.keyCode === 39){
        square = document.querySelector('p');
        console.log("arrowRight is pressed!")
        square.remove();
        domElement.left += 10;
        domElement.createElement();
    } else if(event.keyCode === 40){
        square = document.querySelector('p');
        console.log("arrowDowh is pressed!")
        square.remove();
        domElement.top += 10;
        domElement.createElement();
    }
})


console.log(square)