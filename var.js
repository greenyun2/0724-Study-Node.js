// const odd = "홀수입니다.";
// const even = "짝수입니다.";

// ### Common Js Module = CJS 모듈방식
// module.exports = {
  // key, value값이 같을때 생력가능
//   odd,
//   even,
// }

// EcmaScript Module  = ES모듈방식
// 방법 1.
// exports.odd = odd;
// exports.even = even;
// 방법 2.
export const odd = "홀수입니다.";
export const even = "짝수입니다.";


// Common Js Module = CJS 모듈방식
// export default => EcmaScript Module  = ES모듈방식
// export const 변수명 = "값" 
// 불러올떄 import from 경로