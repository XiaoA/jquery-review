let reviewList = {};
let reviewId = 0;

// Add review
$("#review-form").on("submit", function(event) {
  event.preventDefault();
  let title = $("#title").val();
  let rating = $("#rating").val();
  reviewId++

  reviewList[0] = title;
  reviewList[1] = rating;
  reviewList[2] = reviewId;

  let row = $(`<tr><td>${title}</td><td>${rating}</td><td><button class="btn btn-danger btn-small delete-button">Delete</button></td></tr>"`);
  $("#reviews-table").append(row);
  this.reset(); 
});

// Delete Review
$("tbody").on("click", ".delete-button", function(event){
  if (!confirm("Are you sure you want to delete this item?")) {
    return false;
  } else {
    let deletedRow = $(this).closest("tr").remove();
  }
});


