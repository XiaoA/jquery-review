
$("#review-form").on("submit", function(event) {
  event.preventDefault();
  let title = $("#title").val();
  let rating = $("#rating").val();
  this.reset();
  
  $("#display-reviews").append(`Movie Title: ${title} -- Rating: ${rating}<br>`)


})
