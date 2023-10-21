const converter = document.querySelector(".convertButton");
let rInput = document.querySelector(".rclass");
let gInput = document.querySelector(".gclass");
let bInput = document.querySelector(".bclass");
let resultColumn = document.querySelector(".resultColumn");
let resultSquare = document.querySelector(".resultSquare");

function rgbToHex(red, green, blue) {
  red = red.toString(16);
  green = green.toString(16);
  blue = blue.toString(16);

  if (red.length == 1) red = "0" + red;
  if (green.length == 1) green = "0" + green;
  if (blue.length == 1) blue = "0" + blue;
  let result = "#" + red + green + blue;
  return result;
}

function isValidNumber(value) {
  if (Number.isInteger(value) && value >= 0 && value <= 255) {
    return true;
  }
  return false;
}

const test = rgbToHex(8, 20, 30);
// console.log(test);

converter.addEventListener("click", function () {
  // 將input轉成數字
  let rValue = parseInt(rInput.value);
  let gValue = parseInt(gInput.value);
  let bValue = parseInt(bInput.value);
  // 判斷這個數字是否為整數，是否介於0-255之間
  if (
    isValidNumber(rValue) === true &&
    isValidNumber(gValue) === true &&
    isValidNumber(bValue) === true
  ) {
    let result = rgbToHex(rValue, gValue, bValue);
    console.log(result);
    resultColumn.value = result;
    resultSquare.style.backgroundColor = result;
  } else {
    console.log("the input is incorrect");
  }
});