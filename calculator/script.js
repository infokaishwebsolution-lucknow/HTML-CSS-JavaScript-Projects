// Display Element
const display = document.getElementById("display");

// Append Value
function appendValue(value) {
    display.value += value;
}

// Clear Display
function clearDisplay() {
    display.value = "";
}

// Delete Last Character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate Result
function calculate() {

    try {

        // Replace Symbols
        let expression = display.value
            .replace(/÷/g, "/")
            .replace(/×/g, "*");

        // Evaluate Expression
        display.value = eval(expression);

    } catch (error) {

        display.value = "Error";

    }
}

// Keyboard Support
document.addEventListener("keydown", function(event) {

    const key = event.key;

    // Numbers
    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ) {

        appendValue(key);

    }

    // Enter Key
    else if (key === "Enter") {

        calculate();

    }

    // Backspace
    else if (key === "Backspace") {

        deleteLast();

    }

    // Escape
    else if (key === "Escape") {

        clearDisplay();

    }
});
