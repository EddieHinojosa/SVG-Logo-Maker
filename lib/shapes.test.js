const { default: test } = require('node:test');
const { Circle, Triangle, Square } = require('./shapes.js')

describe("Circle", () => {
    test("generate a red circle, ", () => {
        const circle = new Circle("red")
        expect(circle.render()).toBe('<circle cx="100" cy="100" r="80" fill="red" />')
    })
});

describe("Triangle", () => {
    test("generate a blue triangle", () => {
        const triangle = new Triangle("blue")
        expect(triangle.render()).toBe('<polygon points="100,20 20,180 180,180" fill="blue" />')
    })
});

describe("Square", () => {
    test("generate a green square", () => {
        const square = new Square("green")
        expect(square.render()).toBe('<rect x="20" y="20" width="160" height="160" fill="green" />')
    })
});