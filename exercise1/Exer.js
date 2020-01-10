// Câu 1:

function sumTwoNumber(a,b) {
  return (a === b) ? (3* (a+b)) : (a+b);
}

console.log(sumTwoNumber(2,2));

// Câu 2:

function compareTwoNumber(c) {
  return (19-c >= 0) ? (19-c) : (-3 * (19-c)) ;
}
console.log(compareTwoNumber(12));


// Câu 3:

function divideNumber3(str1) {
  var A = [];
  for (i=0; i<=9; i++) {
    subA = str1.replace('*',i);
    if (parseInt(subA) % 3 === 0) {
      A.push(subA);
    }
  }
  return A;
}
console.log(divideNumber3('1*9'));

// Câu 4:

function divideNumber6(str2) {
  var B = [];
  for (i=0; i<=9; i++) {
    subB = str2.replace('*',i);
    if (parseInt(subB) % 6 === 0) {
      B.push(subB);
    }
  }
  return B;
}
console.log(divideNumber6('1234567890*'));
