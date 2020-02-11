var boxComment;

//add event for addComment button
function eventForAddCommentButton() {
  var boxComment = JSON.parse(localStorage.getItem("boxComment"));
  if (!boxComment) {
    boxComment = [];
  }

  document
    .getElementById("js-comment-btn")
    .addEventListener("click", function() {
      var inputComment = document.getElementById("js-enter-comment").value;
      if (inputComment) {
        var comment = {
          idComment: boxComment.length,
          commenti: inputComment,
          idArticle: 1,
          isDelete: false,
          user: {
            id: 1,
            avatar: "images/avatar.png",
            name: "Trang Pham"
          }
        };

        boxComment.push(comment);

        localStorage.setItem("boxComment", JSON.stringify(boxComment));
        renderComment();
        document.getElementById("js-enter-comment").value = "";
      }
    });
}
eventForAddCommentButton();

//show comment
function renderComment() {
  var boxComment = JSON.parse(localStorage.getItem("boxComment"));
  console.log(boxComment);
  var displayComment = document.getElementById("js-display-comment");
  displayComment.innerHTML = "";

  for (i = 0; i < boxComment.length; i++) {
    if (boxComment[i].isDelete === false) {
      displayComment.innerHTML +=
        '<ul class="menu-list-comment">' +
        '<li class="list-comment">' +
        '<img class="avatar" src=' +
        boxComment[i].user.avatar +
        " >" +
        '<div class="user-content">' +
        "<h4>" +
        boxComment[i].user.name +
        "</h4>" +
        boxComment[i].commenti +
        "</div>" +
        '<button class="btn-remove-comment" data-id ="' +
        boxComment[i].idComment +
        '" >X</button>' +
        "</li>" +
        "</ul>";
    }
  }
  eventForRemoveCommentButton();
}
renderComment();

//add event for removeComment button
function eventForRemoveCommentButton() {
  var boxComment = JSON.parse(localStorage.getItem("boxComment"));
  var btnRm = document.getElementsByClassName("btn-remove-comment");
  for (j = 0; j < btnRm.length; j++) {
    btnRm[j].addEventListener("click", function(brm) {
      var bremove = +brm.target.dataset.id;
      console.log(bremove);
      for (i = 0; i < boxComment.length; i++) {
        if (bremove === boxComment[i].idComment) {
          boxComment[i].isDelete = true;
        }
      }
      localStorage.setItem("boxComment", JSON.stringify(boxComment));
      renderComment();
    });
  }
}
eventForRemoveCommentButton();
