var Articles = [
  {
    idArticle: 1,
    title: "virus Corona in viet nam",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates non sit, animi sunt placeat enim cumque, aliquid provident amet asperiores, similique nobis cupiditate. Non optio minus, libero perferendis incidunt dolorum. Lorem ipsum dolor sit amet,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates non sit, animi sunt placeat enim cumque, aliquid provident amet asperiores, similique nobis cupiditate. Non optio minus, libero perferendis incidunt dolorum. Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates non sit, animi sunt placeat enim cumque, aliquid provident amet asperiores, similique nobis cupiditate. Non optio minus, libero perferendis incidunt dolorum. Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates non sit, animi sunt placeat enim cumque, aliquid provident amet asperiores, similique nobis cupiditate. Non optio minus, libero perferendis incidunt dolorum. Lorem ipsum dolor sit amet",
    isDelete: false
  }
];

localStorage.setItem("Articles", JSON.stringify(Articles));

function renderArticle() {
  var newDetail = document.getElementById("js-news-detail");
  console.log(newDetail);
  var newArticles = JSON.parse(localStorage.getItem("Articles"));
  console.log(newArticles);
  newDetail.innerHTML = "";
  for (i = 0; i < newArticles.length; i++) {
    newDetail.innerHTML +=
      '<section class="section-news-title"><div class="w896">' +
      "<h1>" +
      newArticles[i].title +
      "</h1></div></section>" +
      '<section class="section-news-content"><div class="w896"><p class="paragraph">' +
      newArticles[i].content +
      "</p></div></section>";
  }
}
renderArticle();
