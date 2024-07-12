//shape classes
class Shape {
    constructor(color) {
        this.color = color;
    }
}


// circle class
class Circle extends Shape {
    render () {
        return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`;
    }
}

//triangle class
class Triangle extends Shape {
    render () {
        return `<polygon points="50,10 10,90 90,90" fill="${this.color}" />`;
    }
}

//square class
class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`;
    }
}

module.exports = {Circle, Triangle, Square};