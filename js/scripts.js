// business logic
for (var i=1; i <=100; i++)
{
    if (i % 15 == 0)
        console.log("PING-PONG");
    else if (i % 3 == 0)
        console.log("PING");
    else if (i % 5 == 0)
        console.log("PONG");
    else
        console.log(i);
}

//user interface logic
$(document).ready(function(){
  $("Number").submit(function(event){
    event.preventDefault()
    var userInput= $("input#Number").val()
    console.log(userInput);
    $("p.display").text(userInput)
  });
});
