const categories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(function (category){
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.firstElementChild.nextElementSibling.children.length}`);
}) 

// =======
/* 
const elems = Array.prototype.map.call(categories, categories => 
  console.log(`Category: ${categories.firstElementChild.textContent} \n
  Elements: ${categories.firstElementChild.nextElementSibling.children.length}`)
);
 */

// =======
