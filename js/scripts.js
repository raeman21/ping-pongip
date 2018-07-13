//user interface logic
$(document).ready(function()
 {
  $("form#number").submit(function(event)
  {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    for(var i=0; i<=userInput; i++)
    if(i) {
      var result="";
      if(i%3!=0 && i%5!=0)result=(i)
      if(i%3==0) result +="ping";
      if(i%5==0)result +="pong";
    $(".number").append(result+"</br>")
   }
  });
})
