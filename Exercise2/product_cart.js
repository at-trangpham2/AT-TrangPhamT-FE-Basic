var product = [
    {
      id: 1,
      img: "./images/nuochoa.jpg",
      name: "Nước hoa nữ Venus global",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna",
      price: 200000
    },
    {
      id: 2,
      img: "./images/duong-toc.jpg",
      name: "Serum dưỡng tóc Vacosi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna",
      price: 30000
    },
    {
      id: 3,
      img: "./images/kematnuoc.jpg",
      name: "Kẻ mắt nước Secret key",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna",
      price: 40000
    },
    {
      id: 4,
      img: "./images/matnamoi.jpg",
      name: "Mặt nạ ngủ dưỡng môi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna",
      price: 50000
    },
    {
      id: 5,
      img: "./images/sonkemli.jpg",
      name: "Son kem lì Dearmay",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna",
      price: 60000
    },
    {
      id: 6,
      img: "./images/kemdda.jpg",
      name: "Kem dưỡng da Netrogena ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna",
      price: 160000
    },
    {
      id: 7,
      img: "./images/kemSenka.jpg",
      name: "SKem dưỡng da ban ngày Senka",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna",
      price: 60000
    },
    {
      id: 8,
      img: "./images/kemVichy.jpg",
      name: "Kem dưỡng sáng da Vichy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna",
      price: 60000
    }
  ];

  function numberCart() {
    var resultCart = document.getElementById("js-cart-count");
    localStorage.setItem("product", JSON.stringify(product));
    var cart = JSON.parse(localStorage.getItem("cart"));
    var number = 0;
    for (var i = 0; i < cart.length; i++) {
      number += Number(cart[i]["count"]);
    }
    resultCart.innerHTML = number;
  }
  numberCart();