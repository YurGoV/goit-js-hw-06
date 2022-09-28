const onCreateCollectionBtn = document.querySelector('button[data-create]');
const onDestroyCollectionBtn = document.querySelector('button[data-destroy]');
const inputNumElCollection = document.querySelector('div#controls > input');
const divCollection = document.querySelector('div#boxes');



onCreateCollectionBtn.addEventListener('click', getAmount);
onDestroyCollectionBtn.addEventListener('click', clearBoxes);

function getAmount() {
  const amount = document.querySelector('div#controls > input').value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let size = 30;
  const writeDiv = [];
  console.log(amount);
  for (let i = 1; i <= amount; i += 1) {
  const oneDiv = document.createElement('div')
  oneDiv.style.minWidth = `${size}px`;
  oneDiv.style.height = `${size}px`;
  oneDiv.style.border = "1px solid grey";
  oneDiv.style.borderRadius = "8%";
  oneDiv.style.backgroundColor = getRandomHexColor();

  writeDiv.push(oneDiv);

  size = size + 10;
  };
  
  divCollection.style.display = "flex";
  divCollection.style.flexWrap = "wrap";
  divCollection.style.padding = "5px 0";
  divCollection.style.alignItems = "flex-end";
  divCollection.style.gap = "10px";
  divCollection.append(...writeDiv);
}

function clearBoxes() {
  console.log(document.querySelector('div#boxes'));
  divCollection.innerHTML = '';
  inputNumElCollection.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
