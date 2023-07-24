import {odd, even} from './var.js';
import checkOddOrEven from './func.js';


function checkStringOddOrEven(str) {
  if(str.length % 2) {
    return odd;
  } else {
    return even;
  }
}

console.log(checkOddOrEven(10));
console.log(checkStringOddOrEven('hello'));