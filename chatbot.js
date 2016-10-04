function returnTime(){
  var now  = new Date(Date.now());
    var hours  = now.getHours()
      var minutes  = now.getMinutes()

        var timeString = hours + ":"  + minutes;
          return timeString;


}


var responses = {

"How Is Your Day": "Splendid",

"WHat Time Is It":"Time To Get A Watch",

"WHats your name":"Kiing",

"Kiing":"Yes",

"Hello":"Hola"

"What Time Is It?": "It is Currently" + returnTime() +","
}



var fallbackResponses = ["Im Tired I Dont Feel Like Talking", "Wassup Bruh", "Error","My Head Hurts"]

function speak() {
  var userInput = $("#input").val();
  $("#chat-area").prepend(userInput + "<br>")
    var answer = responses[userInput]

  if (answer == undefined) {
    var rand = Math.floor((Math.random() * fallbackResponses.length));
        $("#chat-area").prepend(fallbackResponses[rand])
  }
    else {
      $("#chat-area").prepend(answer)
    }

  }






$(document).keydown(function(e) {
 if (e.keyCode == 13) {
   speak()

 }
});
