const onCreateCollectionBtn = document.querySelector('button[data-create]');
const onDestroyCollectionBtn = document.querySelector('button[data-destroy]');
const inputNumElCollection = document.querySelector('div#controls > input')

console.log(onCreateCollectionBtn);
console.log(onDestroyCollectionBtn);
console.log(inputNumElCollection);

// inputNumElCollection.addEventListener('blur', reedNumEl);

// function alert(){
// alert("Under Reconstruction!!\n гадаю, що зроблю та здам разом із доробками попередніх завдань.\n Дякую!!");
// };

// const ttt = alert();

const notReady = document.querySelector('div#controls');
console.log(notReady);
const notReadyMessage = document.createElement('p');
notReadyMessage.style.width = "300px";
notReadyMessage.textContent = "Under Reconstruction!! гадаю, що зроблю та здам наступного разу, разом із доробками попередніх завдань. Дякую!!"
// console.log(notReadyMessage);
notReady.append(notReadyMessage);



// onCreateCollectionBtn.addEventListener('click', createCollection);





function createBoxes(amount) {

}
















// !!!!!!! bind









function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
