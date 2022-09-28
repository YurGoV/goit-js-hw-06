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

galleryList.style.listStyleType = "none";
galleryList.style.listStyle = "none";
galleryList.style.display = "flex";
galleryList.style.height = "300px";
galleryList.style.padding = "0 5px";
galleryList.style.flexWrap = "wrap;"
galleryList.style.gap = "40px";

// console.log(galleryList);

// функція генерації однієї лі-шки:
  const galleryItem = (image) => {
  const listItem = document.createElement('li');
  listItem.style.display = "flex";
  listItem.style.position = "relative";
  listItem.style.height = "100%";
  listItem.style.width = "100%";

  const imgItem = document.createElement('img');
  imgItem.src = `${image.url}`;
  imgItem.alt = `${image.alt}`;
  imgItem.style.display = "block";
  imgItem.style.objectFit = "cover";


  // вкладаємо імг у лі-шку
  listItem.append(imgItem);

  return listItem;

}

// мапаємо масив у лі-шки
const galleryItems = images.map(galleryItem);
// console.log(galleryItems);

// вставляємо лі-шки в ул-ку
galleryList.append(...galleryItems)

