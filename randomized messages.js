//so, this isn't really about paradox but a tutorial on making a bot. 
//code:
client.on('message', msg => {
  if (msg.content === 'ping') {
    var replies = ["Ping!", "Pong!"]
var reply = replies[Math.floor(Math.random()* replies.length)]
msg.reply(reply)
  }
});

//start by editing  if (msg.content === 'ping') {
//change the ping to what cmd name you want. eg:
// if (msg.content === 'pokemon') {
 
 //in var replies,change the replies and you can add more by doing: ,""
 //eg:  var replies = ["charmander", "squirtle,","bulbasaur"]
 
 //and there's the command. 
