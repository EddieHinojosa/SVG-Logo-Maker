//below are the required modules to pull in the necessary functions and classes
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const {Circle, Triangle, Square} = require("./lib/shapes.js");


//------------------------------------------------
//questions to be prompted to the user
const questions = [
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
            textColor.match(/^#[0-9A-Fa-f]{6}/i) || textColor.match(/^[a-z]+$/i) ? true : "Please input a valid color or hex value"
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
            shapeColor.match(/^#[0-9A-Fa-f]{6}/i) || shapeColor.match(/^[a-z]+$/i) ? true : "Please input a valid color or hex value"
    }
];



//------------------------------------------------
//function to create the SVG file based on answers
function createSVG(answers) {
    const {text, textColor, shape, shapeColor} = answers;
    const shapeSelection = {
        Circle: new Circle(shapeColor),
        Triangle: new Triangle (shapeColor),
        Square: new Square(shapeColor)
    };
    const shapeObj = shapeSelection[shape];

    const textObj = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>`;
    

    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"> + ${shapeObj.render()} ${textObj} </svg>`;
};





//function to initialize the application
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const svg = createSVG(answers);
        const filePath = path.join(__dirname, 'examples', 'output.svg');
        fs.writeFile(filePath, svg, (err) => {
            if (err) {
                console.error("Error writing file:", err);
            } else {
                console.log("Generated logo.svg");
            }
        });
    });
}

init();