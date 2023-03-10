
function writeCards(names, eventName){
    let messages = [];
    for(let i=0; i < names.length; i++){
         console.log(i);

       console.log (messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`));
      debugger;
    }
    return messages;
}
writeCards( ["Ada", "Brendan", "Ali"],"birthday");

function countDown(number){

    // let num = number;
    while(number >= 0){
        console.log(number);
        number --;
    }
    return number;
}countdown
