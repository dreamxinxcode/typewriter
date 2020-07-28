const sentence = "hello there from lighthouse labs\n";
let iterations = sentence.length;
let ms = 0;

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, ms);
  ms += 50;
}