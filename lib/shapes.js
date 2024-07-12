//shape classes
class Shape {
    constructor(color) {
        this.color = color;
    }
}


// circle class
class Circle extends Shape {
    render () {
        return `<circle cx="100" cy="100" r="80" fill="${this.color}" />`;
    }
}

//triangle class
class Triangle extends Shape {
    render () {
        return `<polygon points="100,20 20,180 180,180" fill="${this.color}" />`;
    }
}

//square class
class Square extends Shape {
    render() {
        return `<rect x="20" y="20" width="160" height="160" fill="${this.color}" />`;
    }
}

module.exports = {Circle, Triangle, Square};