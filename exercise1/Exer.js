// Câu 1:

function SumTwoNumber(a,b) {
  return (a === b) ? (3* (a+b)) : (a+b);
}

console.log(SumTwoNumber(2,2));

// Câu 2:

function CompareTwoNumber(c) {
  return (19-c >= 0) ? (19-c) : (-3 * (19-c)) ;
}
console.log(CompareTwoNumber(12));


// Câu 3:
var A = [];
function DivideNumber3(str1) {
  for (i=0; i<=9; i++) {
    var subA = str1.replace('*',i);
    if (parseInt(subA) % 3 === 0) {
      A.push(subA);
    }
  }
  return A;
}
console.log(DivideNumber3('1*9'));

// Câu 4:
var B = [];

function DivideNumber6(str2) {
  for (i=0; i<=9; i++) {
    var subB = str2.replace('*',i);
    if (parseInt(subB) % 6 === 0) {
      B.push(subB);
    }
  }
  return B;
}
console.log(DivideNumber6('1234567890*'));
