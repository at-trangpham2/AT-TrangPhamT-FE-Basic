var $step = document.querySelectorAll('.step-item');
var $code = document.getElementsByClassName('code');
// var $messCode = document.getElementsByClassName('message-code');
var $message = document.querySelector('.message-first');
var $message2 = document.querySelector('.message-second');
var $message3 = document.querySelector('.message-third');

var maxStep = 4;
var currentStep = 0;

function $(id) {
  return document.getElementById(id);
}

//add event for button first next
$('js-first-btn-next').addEventListener('click', function() {
  checkInputs();
});

//add function of check validate input
function checkInputs() {
  //check validate of firstname field
  if ($('firstname').value === '') {
    setErrorFor($('firstname'));
    $message.innerHTML = 'Username cannot be blank!';
    return false;
  } else {
    setSuccessFor($('firstname'));
  }
  //check validate of lastname field
  if ($('lastname').value === '') {
    setErrorFor($('lastname'));
    $message.innerHTML = 'Lastname cannot be blank!';
    return false;
  } else {
    setSuccessFor($('lastname'));
  }
  //check validate of email field
  if ($('email').value === '') {
    setErrorFor($('email'));
    $message.innerHTML = 'Email cannot be blank!';
    return false;
  } else if (!isEmail($('email').value)) {
    setErrorFor($('email'));
    $message.innerHTML = 'Not a valid email!';
    return false;
  } else {
    setSuccessFor($('email'));
  }
  //check validate of password field
  if ($('password').value === '') {
    setErrorFor($('password'));
    $message.innerHTML = 'Password cannot be blank!';
    return false;
  } else {
    setSuccessFor($('password'));
  }
  //check validate of checkpassword field
  if ($('checkpassword').value === '') {
    setErrorFor($('checkpassword'));
    $message.innerHTML = 'Confirm password cannot be blank!';
    return false;
  } else if ($('password').value !== $('checkpassword').value) {
    setErrorFor($('checkpassword'));
    $message.innerHTML = 'Passwords does not match!';
    return false;
  } else {
    setSuccessFor($('checkpassword'));
  }
  $('js-first-form').style.display = 'none';
  $('js-second-form').style.display = 'block';
  $step[currentStep + 1].classList.add('active');
  currentStep++;
  $('js-btn-back').style.display = 'block';
  $('js-second-btn-next').disabled = true;
}
//add function of show error
function setErrorFor(input) {
  //get parent of input
  var formControl = input.parentElement;
  formControl.className = 'form-control error';
}
 //add function of show success
function setSuccessFor(input) {
  //get parent of input
  var formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//add function for check character of email
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


//add event for button second Next
var $phone = document.getElementsByClassName('phone');
if (!checkPhone()) {
  $('js-second-btn-next').addEventListener('click', function() {
    randomNumber();
    $('js-second-form').style.display = 'none';
    $('js-third-form').style.display = 'block';
    $step[currentStep + 1].classList.add('active');
    currentStep++;
    $('js-btn-back').style.display = 'block';
  });
}

//function for check validate of phone input
function checkPhone() {
  var temp;
  for (i = 0; i < $phone.length; i++) {
    $phone[i].addEventListener('input', function() {
      //check total value of input
      temp = $phone[0].value.length + $phone[1].value.length + $phone[2].value.length;
      $('js-second-btn-next').disabled = (temp === 10) ? false : true;
      if(isNaN($phone[0].value) || isNaN($phone[1].value) || isNaN($phone[2].value)) {
        $message2.innerHTML = 'This digit is not a number!';
        $('js-second-btn-next').disabled = true;
        return false;
      } else {
        $message2.innerHTML = '';
      }
    });
  }
}

//next focus input
function moveOnMax(field, nextFieldID) {
  if (field.value.length >= field.maxLength) {
    document.getElementById(nextFieldID).focus();
  }
}
//random code
function randomNumber() {
  //random from 1000 to 9000 but only get integer number
  Max = 9000;
  Min = 1000;
  num = Math.floor(Min + Math.random() * Max);
  alert('your code is here: ' + num);
  //transform a number to string and splits the string into substrings
  myInputNumberValue = num.toString().split('');
}

//add event for button third Next
if (!checkCode()) {
  $('js-third-btn-next').addEventListener('click', function() {
    $('js-third-form').style.display = 'none';
    $('js-show-info').style.display = 'block';
    showData();
    $step[currentStep + 1].classList.add('active');
    currentStep++;
    $('js-btn-back').style.display = 'block';
  });
}
function checkCode() {
  //map code in alert to input code sms
  for (var i = 0; i < $code.length; i++) {
    $code[i].addEventListener("input", function() {
      var inputCode1 = $code[0].value;
      var inputCode2 = $code[1].value;
      var inputCode3 = $code[2].value;
      var inputCode4 = $code[3].value;
      if (
        inputCode1 !== myInputNumberValue[0] ||
        inputCode2 !== myInputNumberValue[1] ||
        inputCode3 !== myInputNumberValue[2] ||
        inputCode4 !== myInputNumberValue[3]
      ) {
        $('js-third-btn-next').disabled = true;
      } else {
        $('js-third-btn-next').disabled = false;
      }
    });
  }
}

//show information
function showData() {
  $('js-list-info').innerHTML = '';
  $('js-list-info').innerHTML +=
    '<li class="item-data"><span class="label-bold">Fullname: </span>' +
    "<span>" +
    $('firstname').value +
    " " +
    $('lastname').value +
    "</span></li>" +
    '<li class="item-data"><span class="label-bold">Email: </span>' +
    "<span>" +
    $('email').value +
    "</span></li>" +
    '<li class="item-data"><span class="label-bold">Phone: </span>' +
    "<span>" +
    $('phone-first').value +
    $('phone-second').value +
    $('phone-third').value +
    '</span></li>';
}

//add event for button Confirm information
$('js-btn-confirm').addEventListener('click', function() {
  $('js-show-info').style.display = 'none';
  $('js-display-result').style.display = 'block';
  $step[currentStep + 1].classList.add('active');
  $('js-btn-back').style.display = 'none';
});

//add event for button Back
$('js-btn-back').addEventListener('click', function() {
  $step[currentStep].classList.remove('active');
  currentStep --;
  if (currentStep === 0) {
    $('js-btn-back').style.display = 'none';
  }
  if (currentStep < maxStep) {

    if (currentStep === 3) {
      $('js-display-result').style.display = 'none';
      $('js-show-info').style.display = 'block';
    }
    if (currentStep === 2) {
      $('js-show-info').style.display = 'none';
      $('js-third-form').style.display = 'block';
    }
    if (currentStep === 1) {
      $('js-third-form').style.display = 'none';
      $('js-second-form').style.display = 'block';
    }
    if (currentStep === 0) {
      $('js-second-form').style.display = 'none';
      $('js-first-form').style.display = 'block';
    }
  }
});


