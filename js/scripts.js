// business logic
for (var i=1; i <= 20; i++)
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
