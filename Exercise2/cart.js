function addToTable() {
  var cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = [];
  }
  var product = JSON.parse(localStorage.getItem("product"));
  console.log(product);
  var showcart = document.getElementById("js-body-cart");
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var j = 0; j < product.length; j++) {
      if (cart[i].id === product[j].id) {
        sum += product[j].price * cart[i].count;
        var tr = document.createElement("tr");

        var th1 = document.createElement("td");
        th1.scope = "row";
        th1.textContent = i + 1;
        tr.appendChild(th1);

        var td1 = document.createElement("td");
        tr.appendChild(td1);

        var img1 = document.createElement("img");
        img1.src = product[j].img;
        td1.appendChild(img1);

        var td2 = document.createElement("td");
        td2.textContent = product[j].name;
        td1.appendChild(td2);

        var td3 = document.createElement("td");
        tr.appendChild(td3);

        var btn1 = document.createElement("button");
        btn1.className = "btn btn-primary";
        btn1.textContent = "-";
        // btn1.addEventListener("click", reduce);
        td3.appendChild(btn1);

        var input = document.createElement("input");
        // input.id = cart[i].id;
        input.value = cart[i].count;
        input.addEventListener("change", changeQuantity);
        td3.appendChild(input);

        var btn2 = document.createElement("button");
        btn2.className = "btn btn-primary";
        btn2.textContent = "+";
        // btn2.addEventListener("click", increase);
        td3.appendChild(btn2);

        var td4 = document.createElement("td");
        td4.textContent = product[j].price;
        tr.appendChild(td4);

        var td6 = document.createElement("td");
        td6.textContent = product[j].price * cart[i].count;
        tr.appendChild(td6);

        var td5 = document.createElement("td");
        tr.appendChild(td5);

        var btn3 = document.createElement("button");
        btn3.className = "btn btn-remove";
        btn3.textContent = "X";
        td5.appendChild(btn3);

        showcart.appendChild(tr);
      }
    }
  }

  var totalCart = document.getElementById("js-total-cart");

  var tr2 = document.createElement("tr");

  var td6 = document.createElement("td");
  tr2.appendChild(td6);

  var td7 = document.createElement("td");
  tr2.appendChild(td7);

  var td8 = document.createElement("td");
  tr2.appendChild(td8);

  var td9 = document.createElement("td");
  td9.textContent = "Total";
  tr2.appendChild(td9);

  var td10 = document.createElement("td");
  // td10.innerText = finalTotal();
  td10.innerText = sum;
  tr2.appendChild(td10);

  totalCart.appendChild(tr2);
}

addToTable();

// function finalTotal() {

// //   var cart = JSON.parse(localStorage.getItem("cart"));
// //   if (!cart) {
// //     cart = [];
// //   }
// //   var total = 0;
// //   for (var i = 0; i < cart.length; i++) {

// //     total += product[cart[i].id].price * cart[i].count;

// // }
// //   return Number(total.toFixed(2));
// }

var btnremove = document.getElementsByClassName("btn-remove");
var cart = JSON.parse(localStorage.getItem("cart"));
for (var i = 0; i < btnremove.length; i++) {
  btnremove[i].addEventListener("click", function() {
    var item_remove = Number(this.getAttribute("data-meta"));
    index_remove = cart.indexOf(item_remove);
    cart.splice(index_remove, 1);
    localStorage.setItem("cart", JSON.stringify(cart));

    var tr = this.parentElement.parentElement;

    tr.remove();
  });
}

// function remove(brm) {
//   var btnremove=document.getElementsByClassName('btn-remove');
//   var brmove = +brm.target.dataset.id;
//   for(var i=0;i <cart.length; i++){
//     if(brmove ===cart[i].id){
//       cart.splice(i,1);
//   // cart = cart.filter(item => {
//   //   if (item.id !== id) {
//   //     return true;
//   //   }

//   // });
// }

//   localStorage.setItem("cart", JSON.stringify(cart));
//   finalTotal();
// }

function increase(id) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      if (cart[i].count >= 1) {
        cart[i].count = product.cart[i].count + 1;
      }
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  finalTotal();
}

function reduce(id) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      if (cart[i].count > 0) {
        cart[i].count = product.cart[i].count - 1;
      }
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  finalTotal();
}

function changeQuantity(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  finalTotal();
}
