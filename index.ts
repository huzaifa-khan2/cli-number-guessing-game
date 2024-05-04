#!/usr/bin/env node
import inquirer from "inquirer";

const randomnumber = Math.floor(Math.random()*10);

const answers = await inquirer.prompt([
  {
    name: "userGuessednumber",
    type: "number",
    message: "please guess a number between 1-10 : ",
  },
]);

if (answers.userGuessednumber === randomnumber) {

    console.log("Conratulation you guessed the right number!")
}
else{
    console.log(" you guessed the wrong  number!")
}
console.log(answers);
