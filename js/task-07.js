const onSizeControlRange = document.querySelector('input#font-size-control');
// console.log(sizeControlRange);

const text = document.querySelector('span#text');

onSizeControlRange.addEventListener('input', fontSizeUpdate);

function fontSizeUpdate(event) {
    const newFontSize = event.currentTarget.value;
    // console.log(newFontSize);
    text.style.fontSize = `${newFontSize}px`;    
}
