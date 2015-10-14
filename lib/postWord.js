'use strict';

module.exports = function(word, wordObject) {
  if(wordObject.hasOwnProperty(word)) {
    return {msg: "That word is pretty sweet, but we already have " + word + " on our list."};
  }

  wordObject[word] = true;
  console.dir(wordObject);
  return {msg: "Thanks for suggesting " + word + "!"};
};
