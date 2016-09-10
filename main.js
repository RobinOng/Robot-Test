console.log('Hello World'); //Test Line

//Import readline module
var readline = require("readline");

//Construct instances of readline.Interface class
var prompts = readline.createInterface(process.stdin, process.stdout);

//Input Interface
prompts.question("Please input your commands here?", function (userInput) {

    if (userInput.substring(0,5) == "PLACE"){
        message = "Valid command, continue your input";
    } else {
        message = "Invalid command";
    }
    console.log(message);

    //Check if user input "REPORT"
    var isREPORT = (userInput == 5);
    if (isREPORT) {
        process.exit();
    }
});