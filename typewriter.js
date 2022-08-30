const sentence = "hello there from lighthouse labs";

//assigning interval for the delay to 0
let interval = 0;
for (const char of sentence) {
  //printing out each character of sentence
  setTimeout(() => {
    process.stdout.write(char);
  }, interval);
  //incrementing interval by 50 ms each loop for next character
  interval += 50;

}

setTimeout( () => {
  console.log('')
}, interval)