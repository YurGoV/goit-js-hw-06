const inputField = document.querySelector('input#name-input');
// console.log(inputField);
const outputName = document.querySelector('span#name-output');
// console.log(outputName.textContent);


inputField.addEventListener('input', onInputNameChange);

function onInputNameChange(event) {
    // console.log(event.currentTarget.value);
    outputName.textContent = event.currentTarget.value;
    if (outputName.textContent.length === 0) {
        outputName.textContent = "Anonymous"
    }
}