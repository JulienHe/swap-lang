# Swap Lang

Swap lang allows you to separate the "Basic Latin" character and the "Language specific" character like Japanese, Arabic, etc.

## Usage

### Init
```
var swapLang = require('swap-lang');

<!-- OR -->

import swapLang from 'swap-lang';
```

### Basic usage
```
const defaultUsage = swapLang('Hello world! こんにちは世界');

// Output
Hello world! <span>こんにちは世界</span>
```

The basic usage uses Japanese (Katakana, Hiragana, Kanji). If you need an other language, use the example with parameters.


### Extended usage
```
const defaultUsage = swapLang('Hello world! مرحبا بالعالم', {lang: 'ar'});

// Output
Hello world! <span>مرحبا</span> <span>بالعالم</span>
```

## To-do

- [ ] More languages
- [ ] More tests