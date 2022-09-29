const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryList = document.querySelector('ul.gallery');

// добавляємо стилі в ул-ку
galleryList.style = "list-style: none; display: flex; flex-wrap: wrap;  padding: 0 5px; gap: 10px";

// генеруємо строку :
const galleryItems = images.map((image) =>
  `<li style="flex-basis: calc((100% - 20px) / 4)">
  <img src="${image.url}" alt="${image.alt}" style="display: flex; object-fit: contain; width: 100%; height: 100%;">
  </li>`)
  .join("");  
// console.log(galleryItems);


// інсертимо строку в ул-ку
galleryList.insertAdjacentHTML("afterbegin", galleryItems);


