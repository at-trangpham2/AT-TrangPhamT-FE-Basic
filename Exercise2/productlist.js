

var product = [
  {
    id: 1,
    img: "./images/nuochoa.jpg",
    name: 'Nước hoa nữ Venus global',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna",
    price: 200000
    
  },
  {
    id: 2,
    img: './images/duong-toc.jpg',
    name: 'Serum dưỡng tóc Vacosi',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna",                                                                                                                                                                                                                                                                                                                                                                                         
    price: 30000
    
  },
  {
    id: 3,
    img: './images/kematnuoc.jpg',
    name: 'Kẻ mắt nước Secret key',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna",
    price: 40000
    
  },
  {
    id: 4,
    img: './images/matnamoi.jpg',
    name: 'Mặt nạ ngủ dưỡng môi',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna",
    price: 50000
    
  },
  {
    id: 5,
    img: './images/sonkemli.jpg',
    name: 'Son kem lì Dearmay',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna",
    price: 60000
   
  },
  {
    id: 6,
    img: './images/kemdda.jpg',
    name: 'Kem dưỡng da Netrogena ',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna",
    price: 160000
   
  },
  {
    id: 7,
    img: './images/kemSenka.jpg',
    name: 'SKem dưỡng da ban ngày Senka',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna",
    price: 60000
   
  },
  {
    id: 8,
    img: './images/kemVichy.jpg',
    name: 'Kem dưỡng sáng da Vichy',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna",
    price: 60000
   
  }
]

localStorage.setItem("product", JSON.stringify(product));
var item = [];
item = JSON.parse(localStorage.getItem('product'));

function showProducts(product) {
var createProduct = document.getElementById('js-services-item');
  for (var i = 0; i < item.length; i++){
    
      var card = document.createElement('div');
      card.className = 'services-first';

      var cardimg = document.createElement('div');
      cardimg.className = 'img-wrap';
      card.appendChild(cardimg);
      
      var img = document.createElement('img');
      img.alt = item[i].name;
      img.src = item[i].img;
      cardimg.appendChild(img);
      
      var cardcontent = document.createElement('div');
      cardcontent.className = 'content-wrap';
      card.appendChild(cardcontent);

      var title = document.createElement('h3');
      title.textContent = item[i].name;
      cardcontent.appendChild(title);
      
      var desc = document.createElement('p');
      desc.textContent = item[i].description;
      cardcontent.appendChild(desc);
     
      var price = document.createElement('h4');
      
      price.textContent = item[i].price;
      price.className = 'price';
      cardcontent.appendChild(price);
      
      var btn = document.createElement('button');
      btn.className = 'card-btn';
      btn.textContent = 'Add to cart';
      btn.setAttribute('data-id', item[i].id);
      card.appendChild(btn);
      
      createProduct.appendChild(card);
      
  }
}

showProducts(product);
