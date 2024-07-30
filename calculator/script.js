function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function appendCharacter(character) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.innerText.replace('×', '*').replace('÷', '/');
    try {
        let result = eval(expression);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}
