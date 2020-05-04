localStorage.setItem("product", JSON.stringify(product));
var item = [];
item = JSON.parse(localStorage.getItem("product"));

function showProducts(product) {
  var createProduct = document.getElementById("js-services-item");
  createProduct.innerHTML = "";

  for (var i = 0; i < item.length; i++) {
    // var cardWrap = document.createElement("div");
    // cardWrap.className = "services-wrap";

    var card = document.createElement("div");
    card.className = "services-first";
    // cardWrap.appendChild(card);

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
  // console.log(Object.keys(item.id));
}

showProducts(product);

function addToCart(b) {
  var count = 1;
  var bId = +b.target.dataset.id;
  var cart = JSON.parse(localStorage.getItem("cart"));

  if (cart && cart.length) {
    for (var i = 0; i < cart.length; i++) {
      if (bId === cart[i].id) {
        cart[i].count++;
        break;
      } else if (i === cart.length - 1) {
        cart.push({
          id: bId,
          count: count
        });
        break;
      }
    }
  } else {
    cart = [];
    cart.push({
      id: bId,
      count: count
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  numberCart();
}
