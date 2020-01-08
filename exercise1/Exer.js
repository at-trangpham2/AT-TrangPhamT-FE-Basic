// Câu 1:
var a;
var b;
function SumTwoNumber(a,b) {
  if(a === b) {
    console.log(3* (a+b));
  } else {
    console.log(a+b);
  }
}

SumTwoNumber(2,2);

// Câu 2:
var a;
function CompareTwoNumber(a) {
  if(0 <= a < 19) {
    console.log(19-a);
  } else if(a > 19) {
    console.log(a-19);
  } else
    console.log(0);
}
CompareTwoNumber(6);

// Câu 3:
var A = [];
var str1;

function DivideNumber3(str1) {
  for (var i=0;i<=9; i++) {
    A[i]=str1.replace('*',i);
    if (A[i] % 3 === 0) {
      console.log(A[i]);
    }
  }
}
DivideNumber3('1*9');

// Câu 4:
var B = [];
var str2;

function DivideNumber6(str2) {
  for (var i=0;i<=9; i++){
    B[i] = str2.replace('*',i);
    if (B[i] % 6 === 0) {
      console.log(B[i]);
    }
  }
}
DivideNumber6('123456789*');
