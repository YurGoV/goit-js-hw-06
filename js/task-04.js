let counterValue = 0;

// знаходимо кнопки та число лічильника
const onButtonIncr = document.querySelector('button[data-action="increment"]');
const onButtonDecr = document.querySelector('button[data-action="decrement"]') ;
const countedValue = document.querySelector('span#value');
// console.log(countedValue.textContent);

// додаємо слухача на кнопки
onButtonIncr.addEventListener('click', changeValueOnClick);
onButtonDecr.addEventListener('click', changeValueOnClick);

// функція зміни числа лічильника
function changeValueOnClick() {
    const buttonAction = event.target.dataset.action;
    // console.log(buttonAction);
    counterValue = 
        buttonAction === "increment" ? counterValue += 1 
        : buttonAction === "decrement" ? counterValue -= 1 : "error";
    countedValue.textContent = counterValue;
    // console.log(counterValue);
}


