const typeWriter = function(sentence) {
  sentence = sentence + '\n'
  let timeout = 0
    for (const char of sentence) {
      setTimeout(() => {
        process.stdout.write(char);   
      }, timeout);
    timeout += 50
  }
  
};


typeWriter('this is a sentence')
//partner coded with Joe Wang