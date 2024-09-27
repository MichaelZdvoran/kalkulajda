const displayElement = document.getElementById('display');
function appendToDisplay(value) {
    displayElement.value += value;
}
function calculate() {
    try {
        displayElement.value = eval(displayElement.value);
    } catch {
        displayElement.value = "Chyba";
    }
}
function clearDisplay() {
    displayElement.value = '';
}
