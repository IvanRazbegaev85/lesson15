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
            element.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; position: ${this.squarePosition}`;
            element.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            document.body.append(element);
        } else if(this.selector.startsWith("#")) {
            element = document.createElement('p');
            element.id = this.selector.split("").map((value, index) => {
                return index === 0 ? '' : value;
            }).join("");
            element.style.cssText = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; position: ${this.squarePosition}`;
            element.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            document.body.append(element);
        }
    };
}

const domElement = new DomElement("#block", 100, 100, "green", 25);
domElement.createElement();
