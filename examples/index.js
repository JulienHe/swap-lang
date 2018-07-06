const swapLang = require('../index');

// Default
const defaultUsage = swapLang('Hello world! こんにちは世界');
console.log(defaultUsage);

// Change the tag
const paramUsage = swapLang('Hello world! こんにちは世界', {tag: 'div'});
console.log(paramUsage);

// Wrong language
const wrongLanguage = swapLang('Hello world! こんにちは世界', {lang: 'jh', tag: 'div'});
console.log(wrongLanguage);