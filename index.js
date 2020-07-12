/*!
 * swap-lang <https://github.com/JulienHe/swap-lang>
 *
 * Copyright (c) 2018-present, Julien Henrotte.
 * Released under the Apache License 2.0.
 */

'use strict';

const langs = require('./langs');

String.prototype.splice = function(idx, rem, str) {
  return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

function checkCharacterLang(str, regex) {
  return str.match(regex);
}

module.exports = function(str, params) {
  // Default configuration
  // Japanese as language & Span as tag
  let config = {
    lang: 'ja',
    tag: 'span',
    class: ''
  };

  let arrayForeignCharacters = [], firstArrayValue = '', regex = langs[config.lang];

  // If we have params
  if (typeof params !== 'undefined') {
    config.lang = params.lang ? params.lang : config.lang;
    // Check if the lange exist in our file
    if(langs[config.lang]) {
      regex = langs[config.lang];
    } else {
      console.log('The language "'+config.lang+'" doesn\'t exist. \nVerify again.');
      return false;
    }
    config.tag = params.tag ? params.tag : config.tag;
    config.class = params.class ? params.class : config.class;
  }

  // Make sur the string is a Regex
  regex = new RegExp(regex);
  
  for (let i=0; i<str.length; i++) {
    if (checkCharacterLang(str[i], regex)) {
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
  
  // Start from the bottom (Now we here xD)
  // This will make our indexes clean
  arrayForeignCharacters.reverse();
  for (let index = 0; index < arrayForeignCharacters.length; index++) {
   str = str.splice(arrayForeignCharacters[index][1], 0, `</${config.tag}>`);
   str = str.splice(arrayForeignCharacters[index][0], 0, `<${config.tag}${config.class != '' ? ` class="${config.class}"` : '' }>`);
  }

  return str;
};
