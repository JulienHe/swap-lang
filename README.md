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

## Supported Languages
| Code          | Language        |
| ------------- |----------------:|
| {'ar'}        | Arabic          |
| {'bn'}        | Bengali         |
| {'bo'}        | Tibetan         |
| {'el'}        | Greek & Coptic  |
| {'gu'}        | Gujarati        |
| {'he'}        | Hebrew          |
| {'hy'}        | Armenian        |
| {'ja'}        | Japanese        |
| {'ka'}        | Georgian        |
| {'km'}        | Khmer           |
| {'kn'}        | Kannada         |
| {'ko'}        | Korean          |
| {'my'}        | Birman          |
| {'ml'}        | Malayalam       |
| {'or'}        | Oriya           |
| {'sr-cy'}     | Cyrillic        |
| {'ta'}        | Tamil           |
| {'te'}        | Telugu          |
| {'th'}        | Thai            |
| {'tl'}        | Tagalog         |
| {'zh'}        | Chinese         |

## To-do

- [ ] More languages
- [ ] More tests