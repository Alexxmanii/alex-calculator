// Your code here!
import readlineSync from "readline-sync";

// Wait for user's response.
let userName = readlineSync.question(
    chalk.red.bold("May I have your name🤔? ")
);
console.log(chalk.bgGreen.bold("Hi " + userName + "!👋"));

// Handle the secret text (e.g. password).
let needCalculator = readlineSync.question(
    chalk.red.bold("Are You Need Calculator ?  "),
    {
        hideEchoBack: true, // The typed text on screen is hidden by `*` (default).
    }
);
console.log(chalk.red("Ok " + userName + "🫡 , that is your  Calculator !"));
class Calculator {
    constructor() {
        this.PI = Math.PI;
        this.E = Math.E;
    }

    ratio(x, y, width) {
        return (y / x) * width;
    }

    percentage(x, y) {
        if (y === 0) {
            return "Fehler: Divisor darf nicht Null sein";
        }
        const result = (x / y) * 100;
        return result.toFixed(0) + "%";
    }

    add(x, y) {
        return x + y;
    }

    subtract(x, y) {
        return y - x;
    }

    multiply(x, y) {
        return x * y;
    }

    divide(x, y) {
        if (y === 0) {
            return "Fehler: Divisor darf nicht Null sein";
        }
        return x / y;
    }

    remainder(x, y) {
        if (y === 0) {
            return "Fehler: Divisor darf nicht Null sein";
        }
        return x % y;
    }

    elevate(x, y) {
        return Math.pow(x, y);
    }

    sqrt(x) {
        if (x < 0) {
            return "Fehler: Quadratwurzel einer negativen Zahl kann nicht berechnet werden";
        }
        return Math.sqrt(x);
    }
    sin(x) {
        return Math.sin((90 * Math.PI) / 180);
    }
    cos(x) {
        return Math.cos((0 * Math.PI) / 180);
    }
}

// Testen der Calculator-Klasse
const calc = new Calculator();
//
import chalk from "chalk";
//chalk-animation-----------------------------------------
import chalkAnimation from "chalk-animation";

chalkAnimation.rainbow("");
const rainbow = chalkAnimation.rainbow("Calculator"); // Animation starts

setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 1000);
setTimeout(() => {
    rainbow.start(); // Animation resumes
}, 2000);
//ora----------------------------------------------
// import ora from 'ora';
// const spinner = ora('Loading Calculator').start();

// setTimeout(() => {
// 	spinner.color = 'yellow';
// 	spinner.text = 'Loading rainbows';
// }, 1000);
//----------------------------------------------
console.log(
    chalk.bgCyanBright.bold(
        "\n..............Es ist ein skizze des Taschenrechner🙂!..................."
    )
);
console.log(`
                 _____________________
                |  _________________  |
                | | JO           0. | |
                | |_________________| |
                |  ___ ___ ___   ___  |
                | | 7 | 8 | 9 | | + | |
                | |___|___|___| |___| |
                | | 4 | 5 | 6 | | - | |
                | |___|___|___| |___| |
                | | 1 | 2 | 3 | | x | |
                | |___|___|___| |___| |
                | | . | 0 | = | | / | |
                | |___|___|___| |___| |
                |_____________________|`);
 console.log(chalk.bgCyan.bold(`\n ..................Statik Calculator🙂..................`));
console.log("ratio 5, 7, 300");
console.log(calc.ratio(5, 7, 300)); // 420
console.log("percentage 3, 12");
console.log(calc.percentage(3, 12)); // 25%
console.log("add 5+7");
console.log(calc.add(5, 7)); // 12
console.log("subtract 5, 7");
console.log(calc.subtract(5, 7)); // 2
console.log("multiply 5 * 7");
console.log(calc.multiply(5, 7)); // 35
console.log("divide 35 / 7");
console.log(calc.divide(35, 7)); // 5
console.log("remainder 7,5");
console.log(calc.remainder(7, 5)); // 2
console.log("elevate 5³");
console.log(calc.elevate(5, 3)); // 125
console.log("sqrt 25");
console.log(calc.sqrt(25)); // 5

console.log(chalk.bgCyan.bold(
        "\n..............Es IST EIN Dinamk Taschenrechner🙂!..................."));
const a = parseInt(
    readlineSync.question(chalk.red.bold("Give me first number : "))
);
const b = parseInt(
    readlineSync.question(chalk.red.bold("Give me second number: "))
);
const width = parseInt(
    readlineSync.question(chalk.red.bold("Give me width: "))
);
//----------------------------------------------------------------------
// function add1(x, y) {
//     return x + y;
// }
//console.log("add 2number");
//console.log(chalk.blue(`${add1(a, b)}`));
//----------------------------------------------------------------------
console.log("add numbers (Summe)=> number1+number2 :");
console.log(calc.add(a, b));
console.log("multiply numbers=> number1*number2 :");
console.log(calc.multiply(a, b));
console.log("ratio=> (number2 / number1) * width :");
console.log(calc.ratio(a, b, width));
console.log("percentage (prozentualen)=> (number1 / number2) * 100 :");
console.log(calc.percentage(a, b));
console.log(`subtract (Differenz)=> number2 - number1 :`);
console.log(calc.subtract(a, b));
console.log("divide (Quotienten)=> number1 / number2 :");
console.log(calc.divide(a, b));
console.log("remainder (Rest)=> number1 % number2 :");
console.log(calc.remainder(a, b));
console.log("elevante (Potenz)=> number1^number2 :");
console.log(calc.elevate(a, b));
console.log("sqrt (Quadratwurzel)=> number1 Quadratwurzel :");
console.log(calc.sqrt(a, b));
//..........Statik Calculator
console.log(chalk.bgCyan.bold(`\n ..................Statik Calculator🙂................`));
console.log("ratio 5, 7, 300");
console.log(calc.ratio(5, 7, 300)); // 420
console.log("percentage 3, 12");
console.log(calc.percentage(3, 12)); // 25%
console.log("add 5+7");
console.log(calc.add(a, b)); // 12
console.log("subtract 5, 7");
console.log(calc.subtract(5, 7)); // 2
console.log("multiply 5 * 7");
console.log(calc.multiply(5, 7)); // 35
console.log("divide 35 / 7");
console.log(calc.divide(35, 7)); // 5
console.log("remainder 7,5");
console.log(calc.remainder(7, 5)); // 2
console.log("elevate 5³");
console.log(calc.elevate(5, 3)); // 125
console.log("sqrt 25");
console.log(calc.sqrt(25)); // 5
//  console.log("sin 8");
//  console.log(calc.sin(8));
//  console.log("cos 5");
//  console.log(calc.cos(5));
