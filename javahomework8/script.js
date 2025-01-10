$(document).ready(function () {
  $("#greetButton").click(function () {
    var name = $("#nameInput").val();
    $("#greetMessage").text("Hello there " + name + "!");
  });
});
