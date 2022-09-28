const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// знаходимо "ul-ку"
const ingridientsList = document.querySelector('ul#ingredients');

// функція, що створює "li-шку"
const ingridientItem = ingridient => {
  const ingridientEl = document.createElement('li');
  ingridientEl.classList.add('item');
  ingridientEl.textContent = ingridient;
  return ingridientEl;
};

// console.log(ingridientItem(ingredients[0]));

// генеруємо в пам'яті список li-шок
const ingredientsItems = ingredients.map(ingridientItem);

// вставляємо лі-шки в ul-ку
ingridientsList.append(...ingredientsItems);

// console.log(ingridientsList);
