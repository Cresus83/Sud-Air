$(document).on("click", ".toggle", function (event) {
  event.preventDefault();
  $(document.body).toggleClass("blockY");
  $(document.body).removeClass("acceptY");
  var target = $(this).data("target");
  $("#" + target).toggleClass("hide");
  $("#" + target).removeClass("blockY");
  $("#" + target).toggleClass("acceptY");
});
