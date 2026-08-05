window.onload = function () {
    // ignore this for now
    consoleRedirect();

    // Add your code below this line
    document.getElementById("btnAdd").addEventListener("click", () => {
        let num1 = +document.getElementById("calcNum1").value;
        let num2 = +document.getElementById("calcNum2").value;
        let sum = num1 + num2;
        document.getElementById("calcResult").innerHTML = sum;
    });

    let arr = [];
    arr[5] = "5";

    let arr2 = new Array();

    let arr3 = {

    }

    let arr4 = ["1", "2", "3"];

    let myObject = {
        name: "John",
        age: 22,
        email: "john@john.john"
    };





    // Add your code above this line



    // Add click event listeners to each of the calculator operation buttons,
    // and add a function to the events. 

    // Save reference to the calculator input/output fields

    // Calculator operator functions. Each function will read the values from
    // the user input, convert the values to numbers, apply an operation to
    // the numbers, and store the output value in the result field. 

}

function consoleRedirect() {
    // This code redirects console log information and prints
    // it to a textarea on the web page instead.
    const printField = document.getElementById("printField");
    console.stdlog = console.log.bind(console);
    window.onerror = function (msg, url, line) {
        console.error(`Error line ${line}: ${msg}`);
    }
    function log(content, status) {
        if (Array.isArray(content)) {
            let s = "";
            for (let i = 0; i < content.length; i++) {
                s = s.concat(content[i], ", ");
            }
            content = `array: [ ${s.substring(0, s.length - 2)} ]`;
        }
        let line = document.createElement("div");
        line.classList.add(status !== "error" ? "consoleLog" : "consoleError");
        line.innerText = content;
        printField.appendChild(line);
        printField.scrollTop = printField.scrollHeight;
    }
    console.log = function (content) {
        if (content.length > 17 && (content.substring(0, 13) === "[Five Server]" || content.substring(0, 17) === "Socket is closed.")) {
            console.stdlog(content);
            return;
        }
        log(content, "log");
    }
    console.error = function (content) {
        log(content, "error");
    }
}

