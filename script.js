let square = document.querySelector('p');

const DomElement = function (height, width, bg) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.squarePosition = '';
    this.top = 0;
    this.left = 0;

    let element;

    this.createElement = function () {
        element = document.createElement('p');
        element.style.cssText = `height: ${this.height}px; width: ${this.width}px;
         background-color: ${this.bg}; position: ${this.squarePosition}; top:${this.top}px; left:${this.left}px;`;
        document.body.append(element);
    };

    this.changePositionRight = function () {
        square = document.querySelector('p');
        square.style.left = `${(parseInt(square.style.left || 0) + 10)}px`
    };
    this.changePositionLeft = function () {
        square = document.querySelector('p');
        square.style.left = `${(parseInt(square.style.left || 0) - 10)}px`

    };
    this.changePositionUp = function () {
        square = document.querySelector('p');
        square.style.top = `${(parseInt(square.style.top || 0) - 10)}px` ;

    };
    this.changePositionDown = function () {
        square = document.querySelector('p');
        square.style.top = `${(parseInt(square.style.top || 0) + 10)}px`
    };
}

const domElement = new DomElement(100, 100, "black");
domElement.squarePosition = 'absolute';
domElement.createElement();

document.addEventListener("keydown", function (event) {
    if(event.keyCode === 38){
        domElement.changePositionUp()
    } else if(event.keyCode === 39){
        domElement.changePositionRight();
    } else if(event.keyCode === 37){
        domElement.changePositionLeft();
    } else if(event.keyCode === 40){
        domElement.changePositionDown();
    }
})