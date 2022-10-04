const onCreateCollectionBtn = document.querySelector('button[data-create]');
const onDestroyCollectionBtn = document.querySelector('button[data-destroy]');
const inputNumElCollection = document.querySelector('div#controls > input');
const divCollection = document.querySelector('div#boxes');



onCreateCollectionBtn.addEventListener('click', getAmount);
onDestroyCollectionBtn.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = document.querySelector('div#controls > input').value;
  // console.log(amount);
  let size = 30;

  // робимо масив з колекції дів-ок ;)
  const writeDiv = [];

  for (let i = 1; i <= amount; i += 1) {
  // створюємо
  const oneDiv = document.createElement('div')
  oneDiv.style.minWidth = `${size}px`;
  oneDiv.style.height = `${size}px`;
  oneDiv.style.border = "1px solid grey";
  oneDiv.style.borderRadius = "8%";
  oneDiv.style.backgroundColor = getRandomHexColor();

  // пушимо в колекцію
  writeDiv.push(oneDiv);

  size = size + 10;
  };
  
  // додаємо колекції стилів (поодному, як тренування), якщо перше/пере/завантаження сторінки
  if (divCollection.style.length === 0){
    divCollection.style.display = "flex";
    divCollection.style.flexWrap = "wrap";
    divCollection.style.padding = "5px 0";
    divCollection.style.alignItems = "flex-end";
    divCollection.style.gap = "10px";
    // console.log("пишемо стилі");
  }
  // додаємо у колекцію дів-ки
  divCollection.append(...writeDiv);
}

function destroyBoxes() {
  // console.log(document.querySelector('div#boxes'));
  // console.log(divCollection.style.length);
  divCollection.innerHTML = '';
  inputNumElCollection.value = "";
  // divCollection.style = ""; // стилі залишаємо.
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
