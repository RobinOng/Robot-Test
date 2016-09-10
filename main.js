console.log('Hello World'); //Test Line

//Import readline module
var readline = require("readline");

//Construct instances of readline.Interface class
var prompts = readline.createInterface(process.stdin, process.stdout);

askFirstInput();

//User first input
function askFirstInput(){
    prompts.question("Please input your first commands here:", function (userInput) {

        //Extract userInput
        var X = userInput.substring(6,7);
        var Y = userInput.substring(8,9);
        var F = userInput.substring(10,15);

        //Validate userInput
        var isPLACE = (userInput.substring(0,5)=="PLACE");
        var isSPACE = (userInput.substring(5,6)==" ");
        var isCOMMA = (userInput.substring(7,8)=="," && userInput.substring(9,10)==",");
        var isX = (X>=0 && X<=5);
        var isY = (Y>=0 && Y<=5);
        var isF = (F=="NORTH" || F=="SOUTH" || F=="EAST" || F=="WEST");

        if (isPLACE && isSPACE && isCOMMA && isX && isY && isF){
            message = "Valid command, continue your input:";
            console.log(message);
            process.exit();
        } else {
            message = "Invalid command, please input a new command:";
            console.log(message);
            askFirstInput();
        }
    })
}