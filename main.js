console.log('Hello World'); //Test Line

//Import readline module
var readline = require("readline");

//Construct instances of readline.Interface class
var prompts = readline.createInterface(process.stdin, process.stdout);

askFirstInput();

//User first input
function askFirstInput(){
    prompts.question("Please input your first commands here:", function (userInput) {

        var isPLACE = (userInput.substring(0,5)=="PLACE");
        var isSpace = (userInput.substring(5,6)=="");
        var isX = (userInput.substring(6,7)>=0 && userInput.substring(6,7)<=5);
        var isY = (userInput.substring(8,9)>=0 && userInput.substring(8,9)<=5);
        var isF = (userInput.substring(10,15)=="NORTH" || userInput.substring(10,15)=="SOUTH" || userInput.substring(10,15)=="EAST" || userInput.substring(10,15)=="WEST");

        if (isPLACE && isSpace && isX && isY && isF){
            validateFirstInput();
            process.exit();
        } else {
            message = "Invalid command, please input a new command:";
            console.log(message);
            askFirstInput();
        }
    })
}

function validateFirstInput(){
    message = "Valid command, continue your input:";
    console.log(message);
}