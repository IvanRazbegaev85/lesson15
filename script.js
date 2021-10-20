const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    let element;

    this.createElement = function () {
        if(this.selector.startsWith(".")){
            element = document.createElement('div');
            element.classList = this.selector;
            element.style.height = `${this.height}px`;
            element.style.width = `${this.width}px`;
            element.style.backgroundColor = this.bg;
            element.style.fontSize = `${this.fontSize}px`;
            element.textContent = "Lorem ipsum dolor sit amet";
            document.body.append(element);
        } else if(this.selector.startsWith("#")) {
            element = document.createElement('p');
            element.id = this.selector;
            element.style.height = `${this.height}px`;
            element.style.width = `${this.width}px`;
            element.style.backgroundColor = this.bg;
            element.style.fontSize = `${this.fontSize}px`;
            element.textContent = "Lorem ipsum dolor sit amet";
            document.body.append(element);
        }
    };
}

const domElement = new DomElement("#block", 100, 100, "green", 25);
domElement.createElement();
