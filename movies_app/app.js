let reviewList = {};

$("#review-form").on("submit", function(event) {
  event.preventDefault();
  let title = $("#title").val();
  let rating = $("#rating").val();
  reviewList[0] = title;
  reviewList[1] = rating;
  this.reset();

  let row = $(`<tr><td>${title}</td><td>${rating}</td></tr>`);
  $("#reviews-table").append(row);

})

