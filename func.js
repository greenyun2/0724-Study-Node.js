// var.js 모듈 가져올때 require()
// const {odd, even} = require('./var');

import {odd, even} from './var.js';

function checkOddOrEven(number) {
  if(number % 2) {
    return odd;
  } else {
    return even;
  }
}

export default checkOddOrEven;