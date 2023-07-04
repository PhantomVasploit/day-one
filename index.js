const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter number: ', (answer) => {
    const input = parseInt(answer)
  if(!isNaN(input)){
    if(input % 2 == 0){
        console.log(`${answer} is even!`);
    }else{
        console.log(`${answer} is odd!`)
    }
  }else{
    console.log(`${answer} is not a number!`);
  }
  rl.close();
});