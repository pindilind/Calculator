

/* funktion för operand knapparna */
function op_key(event) {

    let inputElement = document.getElementById("input")
    let input = inputElement.value
    let option = event.target.innerText

    if (input) {
        let last = input[input.length - 1]
        console.log(last)
        if ("+-/x".includes(last)) {
            inputElement.value = input.substring(0, input.length - 1) + option
        } else {
            inputElement.value = input + option
        }

    }
}

/* funktion för nummber knapparna */
let inputNum = "";
function num_key(event) {

    let inputElement = document.getElementById("input")
    let input = inputElement.value
    let number = event.target.innerText
    inputElement.value = input + number

}

function clearInput() {
    document.getElementById("input").value = ""

}

/* funktion för = knappen samt uträkning */
function eq_key() {

    let input = document.getElementById("input").value
    let numberOne = ""
    let numberTwo = ""
    let operand
    let index
    let result

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if ("0123456789".includes(char)) {
            numberOne = numberOne + char
        } else {
            operand = char
            index = i + 1
            break
        }
    }
    numberTwo = input.substring(index)

    numberOne = parseInt(numberOne)
    numberTwo = parseInt(numberTwo)
    switch (operand) {
        case "+":
            result = numberOne + numberTwo
            break
        case "-":
            result = numberOne - numberTwo
            break
        case "/":
            result = numberOne / numberTwo
            break
        case "x":
            result = numberOne * numberTwo
            break
        default:
            console.log("unknown operand")
    }
    document.getElementById("input").value = result
}
