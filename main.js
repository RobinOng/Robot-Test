console.log('Hello World'); //Test Line

//Import readline module
var readline = require("readline");

//Construct instances of readline.Interface class
var prompts = readline.createInterface(process.stdin, process.stdout);

askFirstInput();

//User first input
function askFirstInput(){
    prompts.question("Please enter your command here:", function (userInput) {

        //Extract userInput
        X = userInput.substring(6,7);
        Y = userInput.substring(8,9);
        F = userInput.substring(10,15);

        //Validate userInput
        if (validateFirstInput(userInput)){
            askConsecutiveInput();
        } else {
            message = "Invalid command.";
            console.log(message);
            askFirstInput();
        }
    })
}

function validateFirstInput(userCommand){
    var isPLACE = (userCommand.substring(0,5)=="PLACE");
    var isSPACE = (userCommand.substring(5,6)==" ");
    var isCOMMA = (userCommand.substring(7,8)=="," && userCommand.substring(9,10)==",");
    var isX = (X>=0 && X<=5);
    var isY = (Y>=0 && Y<=5);
    var isF = (F=="NORTH" || F=="SOUTH" || F=="EAST" || F=="WEST");
    return (isPLACE && isSPACE && isCOMMA && isX && isY && isF);
}

function askConsecutiveInput(){
    prompts.question("Please continue entering your commands here:", function (userInput) {

        var isPLACE = (userInput.substring(0,5)=="PLACE");
        var isSPACE = (userInput.substring(5,6)==" ");
        var isCOMMA = (userInput.substring(7,8)=="," && userInput.substring(9,10)==",");
        var isX = (userInput.substring(6,7)>=0 && userInput.substring(6,7)<=5);
        var isY = (userInput.substring(8,9)>=0 && userInput.substring(8,9)<=5);
        var isF = (userInput.substring(10,15)=="NORTH" || userInput.substring(10,15)=="SOUTH" || userInput.substring(10,15)=="EAST" || userInput.substring(10,15)=="WEST");

        if (isPLACE && isSPACE && isCOMMA && isX && isY && isF) {
            X = userInput.substring(6,7);
            Y = userInput.substring(8,9);
            F = userInput.substring(10,15);
            askConsecutiveInput();
        }else{
            switch (userInput) {
                    //User input "MOVE"
                    case "MOVE":
                        doMove();
                        break;

                    //User input "LEFT"
                    case "LEFT":
                        doLeft();
                        break;

                    //User input "RIGHT"
                    case "RIGHT":
                        doRight();
                        break;

                    //User input "REPORT"
                    case "REPORT":
                        doReport();
                        break;
    //              process.exit();

                    default:
                        errorInput();
                }
       }
        return true;
    })
}

function doMove(){
    switch(F){
        case "NORTH":
            if (X == 5){
                errorMove();
            }else{
                X++;
            }
            break;
        case "SOUTH":
            if (X == 0) {
                errorMove();
            }else{
                X--;
            }
            break;
        case "EAST":
            if (Y == 5){
                errorMove();
            }else{
                Y++;
            }
            break;
        case "WEST":
            if (Y == 0) {
                errorMove();
            }else{
                Y--;
            }
            break;
    }
    askConsecutiveInput();
}

function doLeft() {
    switch(F){
        case "NORTH":
            F = "WEST";
            break;
        case "SOUTH":
            F = "EAST";
            break;
        case "EAST":
            F = "NORTH";
            break;
        case "WEST":
            F = "SOUTH";
            break;
    }
    askConsecutiveInput();
}

function doRight() {
    switch(F){
        case "NORTH":
            F = "EAST";
            break;
        case "SOUTH":
            F = "WEST";
            break;
        case "EAST":
            F = "SOUTH";
            break;
        case "WEST":
            F = "NORTH";
            break;
    }
    askConsecutiveInput();
}

function doReport() {
    console.log(X + "," + Y + "," + F);
}

function errorInput(){
    console.log("Invalid Command, command ignored.");
    askConsecutiveInput();
}

function errorMove(){
    console.log("Unable to move forward, the robot would fall off the table");
    askConsecutiveInput();
}