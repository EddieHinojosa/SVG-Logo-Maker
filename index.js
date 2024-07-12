//below are the required modules to pull in the necessary functions and classes
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const {Circle, Triange, Square} = require("./lib/shapes.js");


const quetions = [
    {
        type: "input",
        name: "text",
        message: "Please enter up to 3 charaters",
        validate: (text) => 
            text.length > 3  ? "Please re-enter UP TO 3 characters" : true
    },
    {
        type: "input", 
        name: "textColor",
        message: "Please enter a color for the text (keyword or hex)",
        validate: (textColor) =>
            //will prompt the user to enter a valid color or hex value if input was invalid
            textColor.match(/#[0-9A-Fa-f]{6}/) && textColor.match(/^[a-z]+$/) ? true : "Please input a valid color or hex value"
    },
    {
        type: "list",
        name: "shape",
        message: "Please select a shape from options below",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input", 
        name: "shapeColor",
        message: "Please enter the color for your shape (keyword or hex)",
        validate: (shapeColor) =>
            //will prompt the user to enter a valid color or hex value if input was invalid
            shapeColor.match(/#[0-9A-Fa-f]{6}/) && shapeColor.match(/^[a-z]+$/) ? true : "Please input a valid color or hex value"
    }
]
