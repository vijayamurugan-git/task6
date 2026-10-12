
let again;

do {
    let num = Number(prompt("Enter a number:"));

    let result;

    if (num % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    function multiplicationTable(n) {
        console.log("Multiplication Table of " + n);

        for (let i = 1; i <= 10; i++) {
            console.log(n + " x " + i + " = " + (n * i));
        }
    }

    multiplicationTable(num);
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }
    alert(
        "Number: " + num +
        "\nThe number is " + result +
        "\nSum of natural numbers: " + sum
    );
    if (num % 2 === 0) {
        console.log("Square Star Pattern:");

        for (let i = 1; i <= num; i++) {
            let stars = "";

            for (let j = 1; j <= num; j++) {
                stars = stars + "* ";
            }

            console.log(stars);
        }
    } else {
        console.log("Right-Angled Triangle:");

        for (let i = 1; i <= num; i++) {
            let stars = "";

            for (let j = 1; j <= i; j++) {
                stars = stars + "* ";
            }

            console.log(stars);
        }
    }
    again = confirm("Do you want to run the program again?");

} while (again);
