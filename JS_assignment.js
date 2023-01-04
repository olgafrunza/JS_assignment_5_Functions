// Assignment 1

function grid(num) {
  for (let i = 1; i <= num; i++) {
    let col = "";
    for (let j = 1; j <= num; j++) {
      if (i === j) {
        col += "1";
      } else {
        col += "0";
      }
    }
    console.log(col);
    console.log("----------");
  }
}
grid(4);

//Assignment 2

function exponentiate(base, power) {
  let result = base ** power;
  console.log(result);
}
exponentiate(5, 2);

//Assignment 3

function newString(str) {
  if (str.length === 1) {
    return str;
  } else {
    let firstLett = str[0];
    let lastLett = str[str.length - 1];
    let middle = "";
    for (let i = 1; i < str.length - 1; i++) {
      middle += str[i];
    }
    let newStr = lastLett + middle + firstLett;
    return newStr;
  }
}
console.log(newString("ab"));
console.log(newString("Connect"));
