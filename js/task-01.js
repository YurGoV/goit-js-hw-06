const categories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(function (category){
  // console.log(`Category: ${category.firstElementChild.textContent}`);
  const categoryName = category.querySelector('h2').textContent;
    console.log(`Category: ${categoryName}`);

  // console.log(`Elements: ${category.firstElementChild.nextElementSibling.children.length}`);
  const categoryElementsLength = category.querySelectorAll('ul > li').length;
  console.log(`Elements: ${categoryElementsLength}`);
  
}) 
