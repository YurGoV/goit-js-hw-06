const body = document.querySelector('body');
// console.log(body);
const onChangeColorButton = document.querySelector('button.change-color');
// console.log(onChangeColorButton);

// add listener
onChangeColorButton.addEventListener('click', ChangeColor)

let nextColor =  getRandomHexColor();

function ChangeColor(event) {
  body.style.backgroundColor = nextColor;
  nextColor =  getRandomHexColor();
  // setTimeout(function() {
  //   onChangeColorButton.style.backgroundColor = nextColor;
  // }, 350);
  setTimeout(function() {changeButtonColor()}, 350);

}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function changeButtonColor() {
  onChangeColorButton.style.backgroundColor = nextColor;
};
