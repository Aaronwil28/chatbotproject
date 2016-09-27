function speak() {
  var userInput = $("#input").val();
  console.log("userInput is " + speak);
  $("#chat-area").prepend(userInput)
}
