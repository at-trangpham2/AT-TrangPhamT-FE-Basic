localStorage.setItem("product", JSON.stringify(product));
var item = [];
item = JSON.parse(localStorage.getItem("product"));

// var createProduct = document.getElementById("js-services-item");
function showProducts(product) {
  var createProduct = document.getElementById("js-services-item");
  createProduct.innerHTML = "";

  for (var i = 0; i < item.length; i++) {
    var card = document.createElement("div");
    card.className = "services-first";

    var cardimg = document.createElement("div");
    cardimg.className = "img-wrap";
    card.appendChild(cardimg);

    var img = document.createElement("img");
    img.alt = item[i].name;
    img.src = item[i].img;
    cardimg.appendChild(img);

    var cardcontent = document.createElement("div");
    cardcontent.className = "content-wrap";
    card.appendChild(cardcontent);

    var title = document.createElement("h3");
    title.textContent = item[i].name;
    cardcontent.appendChild(title);

    var desc = document.createElement("p");
    desc.textContent = item[i].description;
    cardcontent.appendChild(desc);

    var price = document.createElement("h4");

    price.textContent = "Price: " + "$ " + item[i].price;
    price.className = "price";
    cardcontent.appendChild(price);

    var btn = document.createElement("button");
    btn.className = "card-btn";
    btn.textContent = "Add to cart";
    btn.setAttribute("data-id", item[i].id);
    btn.addEventListener("click", addToCart);
    card.appendChild(btn);

    createProduct.appendChild(card);
  }
}

showProducts(product);

function addToCart(b) {
  var count = 1;
  var pId = +b.target.dataset.id;
  var cart = JSON.parse(localStorage.getItem("cart"));

  if (cart) {
    // var cart = JSON.parse(localStorage.getItem("cart"));
    for (var i = 0; i < cart.length; i++) {
      if (pId === cart[i].id) {
        cart[i].count++;
        break;
      } else if (i === cart.length - 1) {
        cart.push({ id: pId, count: count });
        break;
      }
    }
  } else {
    cart = [];
    cart.push({ id: pId, count: count });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  numberCart();
}
