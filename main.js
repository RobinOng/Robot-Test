console.log('Hello World'); //Test Line

//Import readline module
var readline = require("readline");

//Construct instances of readline.Interface class
var prompts = readline.createInterface(process.stdin, process.stdout);

//Run Programme
askFirstInput();

//Define global variables
var X = 0;
var Y = 0;
var F = 0;

//User first input
function askFirstInput(){
    console.log("List of Command:-");
    console.log("- PLACE X,Y,F");
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

//Validate userInput
function validateFirstInput(userCommand){
    var isPLACE = (userCommand.substring(0,5)=="PLACE");
    var isSPACE = (userCommand.substring(5,6)==" ");
    var isCOMMA = (userCommand.substring(7,8)=="," && userCommand.substring(9,10)==",");
    var isX = (X>=0 && X<=5);
    var isY = (Y>=0 && Y<=5);
    var isF = (F=="NORTH" || F=="SOUTH" || F=="EAST" || F=="WEST");
    return (isPLACE && isSPACE && isCOMMA && isX && isY && isF);
}

//User consecutive input
function askConsecutiveInput(){
    console.log("List of Commands:-");
    console.log("- PLACE X,Y,F");
    console.log("- MOVE");
    console.log("- LEFT");
    console.log("- RIGHT");
    console.log("- REPORT");
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
            if (Y == 5){
                errorMove();
            }else{
                Y++;
            }
            break;
        case "SOUTH":
            if (Y == 0) {
                errorMove();
            }else{
                Y--;
            }
            break;
        case "EAST":
            if (X == 5){
                errorMove();
            }else{
                X++;
            }
            break;
        case "WEST":
            if (X == 0) {
                errorMove();
            }else{
                X--;
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
    doDraw();
    console.log(X + "," + Y + "," + F);
    askConsecutiveInput();
}

function errorInput(){
    console.log("Invalid Command, command ignored.");
    askConsecutiveInput();
}

function errorMove(){
    console.log("Unable to move forward, the robot would fall off the table");
    askConsecutiveInput();
}

function doDraw(){
    var lineHorizontal = " --- --- --- --- --- ";
    var lineVertical = "|   |   |   |   |   |";

    var arrowF;

    switch(F){
        case "NORTH":
            arrowF = "^";
            break;
        case "SOUTH":
            arrowF = "v";
            break;
        case "EAST":
            arrowF = ">";
            break;
        case "WEST":
            arrowF = "<";
            break;
    }

    var nth = 0;
    var x = parseInt(X)+1;

    var lineHorizontalWithRobot = lineHorizontal.replace(/ /g, function (match) {
        nth++;
        return (nth == x) ? arrowF : match;
    });

    if (Y > 0){
        for (var i=5; i>0; i--){
            if (i == Y){
                console.log(lineHorizontalWithRobot);
                console.log(lineVertical);
            }else{
                console.log(lineHorizontal);
                console.log(lineVertical);
            }
        }
        console.log(lineHorizontal);
    }

    if (Y == 0){
        for (var i=5; i>0; i--){
            console.log(lineHorizontal);
            console.log(lineVertical);
        }
        console.log(lineHorizontalWithRobot);
    }
}