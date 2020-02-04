var boxComment = [];

function showComment() {
  var boxComment = JSON.parse(localStorage.getItem("boxComment"));
  var displayComment = document.getElementById("js-display-comment");
  displayComment.innerHTML = "";
  for (i = 0; i < boxComment.length; i++) {
    displayComment.innerHTML +=
      "<ul class='menu-list-comment'>" +
      '<li class="list-comment">' +
      '<img class="avatar" src="images/avatar.png" >' +
      '<div class="user-content">' +
      "<h4>Trang Pham</h4>" +
      boxComment[i] +
      "</div>" +
      '<button class="btn-remove-comment" data-id ="' +
      i +
      '" >X</button>' +
      "</li>" +
      "</ul>";
  }
  removeComment();
}
showComment();

function addComment() {
  document
    .getElementById("js-comment-btn")
    .addEventListener("click", function() {
      var inputComment = document.getElementById("js-enter-comment").value;
      if (inputComment) {
        boxComment.push(inputComment);
        localStorage.setItem("boxComment", JSON.stringify(boxComment));
        showComment();
        document.getElementById("js-enter-comment").value = "";
      }
    });
}
addComment();

function removeComment() {
  var btnRm = document.getElementsByClassName("btn-remove-comment");
  for (i = 0; i < btnRm.length; i++) {
    btnRm[i].addEventListener("click", function(brm) {
      var brmove = brm.target.dataset.id;
      // for (var j = 0; j < boxComment.length; j++) {
      //   if (brmove === boxComment[j]) {
      boxComment.splice(brmove, 1);
      localStorage.setItem("boxComment", JSON.stringify(boxComment));
      showComment();
    });
  }
}

