const numbersOne = document.querySelector("#number-1");
const numbersDue = document.querySelector("#number-2");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const share = document.querySelector("#share");
const result = document.querySelector("#result");




numbersOne.addEventListener("input", numbersEvent)
numbersDue.addEventListener("input", numbersEvent);

function numbersEvent(event) {
   event.preventDefault();
    const number1 = Number(numbersOne.value)
    const number2 = Number(numbersDue.value);
    result.innerHTML = ``
    plus.addEventListener("click", () => {
         result.innerHTML = plusResult(number1, number2);
    })
    minus.addEventListener("click", () => {
      result.innerHTML = minusResult(number1, number2);
    });
    multiply.addEventListener("click", () => {
      result.innerHTML = multiplyResult(number1, number2);
    });
    share.addEventListener("click", () => {
      result.innerHTML = shareResult(number1, number2);
    });


}
let resultValue = 0;

function plusResult(number1, number2) {
    return resultValue = number1 + number2
}

function minusResult(number1, number2) {
  return resultValue = number1 - number2;
}

function multiplyResult(number1, number2) {
  return resultValue = number1 * number2;
}

function shareResult(number1, number2) {
  return resultValue = number1 / number2;
}


