/*!
 * swap-lang <https://github.com/JulienHe/swap-lang>
 *
 * Copyright (c) 2018-present, Julien Henrotte.
 * Released under the Apache License 2.0.
 */

'use strict';

String.prototype.splice = function(idx, rem, str) {
  return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

function isJapaneseMatch(str) {
  return str.match(/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/);
}

module.exports = function(str) {
  let arrayForeignCharacters = [],
      firstArrayValue = '';

  for (i=0; i<str.length; i++) {
    if (isJapaneseMatch(str[i])) {
      // Start with the first foreign character
      if(firstArrayValue === '') {
        firstArrayValue = i;
      }
      
      // If the character is the last one of the paragraph
      if (i === str.length - 1) {
        arrayForeignCharacters.push([firstArrayValue, i + 1]);
        firstArrayValue = '';
      }
    // When there is not foreign character but the previous was one
    }　else if (firstArrayValue !== '') {
      arrayForeignCharacters.push([firstArrayValue, i]);
      firstArrayValue = '';
    }
  }
  
  // To keep modify the text without messing up indexes, we'll start modifying the text from the last item
  arrayForeignCharacters.reverse();
  
  for (let index = 0; index < arrayForeignCharacters.length; index++) {
   str = str.splice(arrayForeignCharacters[index][1], 0, "</span>");
   str = str.splice(arrayForeignCharacters[index][0], 0, "<span>");
  }

  return str;
};