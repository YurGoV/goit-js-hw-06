const inputArea = document.querySelector('input')
// console.log(inputArea);
const inputLengthNum = Number(inputArea.dataset.length);
// console.log(inputLengthNum);

inputArea.addEventListener('blur', symbolsCountAndCompare);

function symbolsCountAndCompare() {
    // console.log(inputArea.value.length);
    if (inputArea.value.length === inputLengthNum) {
        // console.log("BINGO");
        return inputArea.setAttribute('class', 'valid');
        }
    // console.log("FAIL");
    if (inputArea.value.length === 0) {
        return inputArea.removeAttribute('class');
    }
    return inputArea.setAttribute('class', 'invalid');
}
