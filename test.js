/* This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://www.wtfpl.net/ for more details. */
var swapLang = require('./');
var test = require('tape');

test('normal cases', function (assert) {
  assert.plan(7);
  assert.strictEqual(
    swapLang('Hello world! こんにちは世界'),
    'Hello world! <span>こんにちは世界</span>'
  );
  assert.strictEqual(
    swapLang('こんにちは世界 Hello world!'),
    '<span>こんにちは世界</span> Hello world!'
  );
  assert.strictEqual(
    swapLang('世界 Hello world! こんにちは'),
    '<span>世界</span> Hello world! <span>こんにちは</span>'
  );
  assert.strictEqual(
    swapLang('世界 Hello こんにちは world!'),
    '<span>世界</span> Hello <span>こんにちは</span> world!'
  );
  assert.strictEqual(
    swapLang('H こ E ん L に L ち O は'),
    'H <span>こ</span> E <span>ん</span> L <span>に</span> L <span>ち</span> O <span>は</span>'
  );
  assert.strictEqual(
    swapLang(
      '水行末 雲来末 風来末、やぶら小路の藪柑子、食う寝る処に住む処。海砂利水魚の、パイポパイポ パイポのシューリンガン、寿限無、寿限無。シューリンガンのグーリンダイ。パイポパイポ パイポのシューリンガン、長久命の長助。水行末 雲来末 風来末、長久命の長助。五劫の擦り切れ、やぶら小路の藪柑子。シューリンガンのグーリンダイ。食う寝る処に住む処。五劫の擦り切れ。寿限無、寿限無、グーリンダイのポンポコピーのポンポコナーの。海砂利水魚の、グーリンダイのポンポコピーのポンポコナーの。Lorem ipsum dolor sit amet, sit tota causae at, vix ne iudico persecuti rationibus, sed te meliore menandri persecuti. Mei quis ridens no. Te pri dolorum volutpat, sea qualisque maluisset eu. Mei nihil causae no, ne vis wisi assum.'
    ),
    '<span>水行末</span> <span>雲来末</span> <span>風来末、やぶら小路の藪柑子、食う寝る処に住む処。海砂利水魚の、パイポパイポ</span> <span>パイポのシューリンガン、寿限無、寿限無。シューリンガンのグーリンダイ。パイポパイポ</span> <span>パイポのシューリンガン、長久命の長助。水行末</span> <span>雲来末</span> <span>風来末、長久命の長助。五劫の擦り切れ、やぶら小路の藪柑子。シューリンガンのグーリンダイ。食う寝る処に住む処。五劫の擦り切れ。寿限無、寿限無、グーリンダイのポンポコピーのポンポコナーの。海砂利水魚の、グーリンダイのポンポコピーのポンポコナーの。</span>Lorem ipsum dolor sit amet, sit tota causae at, vix ne iudico persecuti rationibus, sed te meliore menandri persecuti. Mei quis ridens no. Te pri dolorum volutpat, sea qualisque maluisset eu. Mei nihil causae no, ne vis wisi assum.'
  );
  assert.strictEqual(
    swapLang(
      'Lorem ipsum dolor sit amet, sit tota causae at, vix ne iudico persecuti rationibus, sed te meliore menandri persecuti. Mei quis ridens no. Te pri dolorum volutpat, sea qualisque maluisset eu. Mei nihil causae no, ne vis wisi assum. 水行末 雲来末 風来末、やぶら小路の藪柑子、食う寝る処に住む処。海砂利水魚の、パイポパイポ パイポのシューリンガン、寿限無、寿限無。シューリンガンのグーリンダイ。パイポパイポ パイポのシューリンガン、長久命の長助。水行末 雲来末 風来末、長久命の長助。五劫の擦り切れ、やぶら小路の藪柑子。シューリンガンのグーリンダイ。食う寝る処に住む処。五劫の擦り切れ。寿限無、寿限無、グーリンダイのポンポコピーのポンポコナーの。海砂利水魚の、グーリンダイのポンポコピーのポンポコナーの。'
    ),
    'Lorem ipsum dolor sit amet, sit tota causae at, vix ne iudico persecuti rationibus, sed te meliore menandri persecuti. Mei quis ridens no. Te pri dolorum volutpat, sea qualisque maluisset eu. Mei nihil causae no, ne vis wisi assum. <span>水行末</span> <span>雲来末</span> <span>風来末、やぶら小路の藪柑子、食う寝る処に住む処。海砂利水魚の、パイポパイポ</span> <span>パイポのシューリンガン、寿限無、寿限無。シューリンガンのグーリンダイ。パイポパイポ</span> <span>パイポのシューリンガン、長久命の長助。水行末</span> <span>雲来末</span> <span>風来末、長久命の長助。五劫の擦り切れ、やぶら小路の藪柑子。シューリンガンのグーリンダイ。食う寝る処に住む処。五劫の擦り切れ。寿限無、寿限無、グーリンダイのポンポコピーのポンポコナーの。海砂利水魚の、グーリンダイのポンポコピーのポンポコナーの。</span>'
  );
});

test('other languages', function (assert) {
  assert.plan(34);

  // Arabic
  assert.strictEqual(
    swapLang('Hello world! مرحبا بالعالم', { lang: 'ar' }),
    'Hello world! <span>مرحبا</span> <span>بالعالم</span>'
  );
  assert.strictEqual(
    swapLang('Hello مرحبا world! بالعالم', { lang: 'ar' }),
    'Hello <span>مرحبا</span> world! <span>بالعالم</span>'
  );

  // Korean
  assert.strictEqual(
    swapLang('Hello world! 안녕하세요!', { lang: 'ko' }),
    'Hello world! <span>안녕하세요</span>!'
  );
  assert.strictEqual(
    swapLang('Hello 여보세요 world! 세계', { lang: 'ko' }),
    'Hello <span>여보세요</span> world! <span>세계</span>'
  );

  // Chinese
  assert.strictEqual(
    swapLang('Hello world! 你好，世界！', { lang: 'zh' }),
    'Hello world! <span>你好</span>，<span>世界</span>！'
  );
  assert.strictEqual(
    swapLang('Hello 你好 world! 世界！', { lang: 'zh' }),
    'Hello <span>你好</span> world! <span>世界</span>！'
  );

  // Bengali
  assert.strictEqual(
    swapLang('Hello world! ওহে বিশ্ব!', { lang: 'bn' }),
    'Hello world! <span>ওহে</span> <span>বিশ্ব</span>!'
  );
  assert.strictEqual(
    swapLang('Hello ওহে world! বিশ্ব!', { lang: 'bn' }),
    'Hello <span>ওহে</span> world! <span>বিশ্ব</span>!'
  );

  // Greek
  assert.strictEqual(
    swapLang('Hello world! Γειά σου Κόσμε!', { lang: 'el' }),
    'Hello world! <span>Γειά</span> <span>σου</span> <span>Κόσμε</span>!'
  );
  assert.strictEqual(
    swapLang('Hello Χαίρετε world! κόσμος!', { lang: 'el' }),
    'Hello <span>Χαίρετε</span> world! <span>κόσμος</span>!'
  );

  // Gujarati
  assert.strictEqual(
    swapLang('Hello world! હેલો વર્લ્ડ!', { lang: 'gu' }),
    'Hello world! <span>હેલો</span> <span>વર્લ્ડ</span>!'
  );
  assert.strictEqual(
    swapLang('Hello હેલ્લો world! દુનિયા!', { lang: 'gu' }),
    'Hello <span>હેલ્લો</span> world! <span>દુનિયા</span>!'
  );

  // Hebrew
  assert.strictEqual(
    swapLang('Hello world! שלום עולם!', { lang: 'he' }),
    'Hello world! <span>שלום</span> <span>עולם</span>!'
  );
  assert.strictEqual(
    swapLang('Hello שלום world! עוֹלָם!', { lang: 'he' }),
    'Hello <span>שלום</span> world! <span>עוֹלָם</span>!'
  );

  // Armenian
  assert.strictEqual(
    swapLang('Hello world! Բարեւ աշխարհ!', { lang: 'hy' }),
    'Hello world! <span>Բարեւ</span> <span>աշխարհ</span>!'
  );
  assert.strictEqual(
    swapLang('Hello Բարեւ world! աշխարհը!', { lang: 'hy' }),
    'Hello <span>Բարեւ</span> world! <span>աշխարհը</span>!'
  );

  // Japanese
  assert.strictEqual(
    swapLang('Hello world! こんにちは世界', { lang: 'ja' }),
    'Hello world! <span>こんにちは世界</span>'
  );
  assert.strictEqual(
    swapLang('こんにちは世界 Hello world!', { lang: 'ja' }),
    '<span>こんにちは世界</span> Hello world!'
  );

  // Georgian
  assert.strictEqual(
    swapLang('Hello world! გამარჯობა მსოფლიო!', { lang: 'ka' }),
    'Hello world! <span>გამარჯობა</span> <span>მსოფლიო</span>!'
  );
  assert.strictEqual(
    swapLang('Hello გამარჯობა world! მსოფლიო!', { lang: 'ka' }),
    'Hello <span>გამარჯობა</span> world! <span>მსოფლიო</span>!'
  );

  // Khmer
  assert.strictEqual(
    swapLang('Hello world! សួស្តី​ពិភពលោក', { lang: 'km' }),
    'Hello world! <span>សួស្តី</span>​<span>ពិភពលោក</span>'
  );
  assert.strictEqual(
    swapLang('សួស្តី​ពិភពលោក Hello world!', { lang: 'km' }),
    '<span>សួស្តី</span>​<span>ពិភពលោក</span> Hello world!'
  );

  // Kannada
  assert.strictEqual(
    swapLang('Hello world! ಹಲೋ ವರ್ಲ್ಡ್!', { lang: 'kn' }),
    'Hello world! <span>ಹಲೋ</span> <span>ವರ್ಲ್ಡ್</span>!'
  );
  assert.strictEqual(
    swapLang('Hello ಹಲೋ world ಜಗತ್ತು!', { lang: 'kn' }),
    'Hello <span>ಹಲೋ</span> world <span>ಜಗತ್ತು</span>!'
  );

  // Birman - Myanmar (Burmese)
  assert.strictEqual(
    swapLang('Hello world! မင်္ဂလာပါကမ္ဘာလောက!', { lang: 'my' }),
    'Hello world! <span>မင်္ဂလာပါကမ္ဘာလောက</span>!'
  );
  assert.strictEqual(
    swapLang('Hello ဟယ်လို world ကမ္ဘာကြီးကို!', { lang: 'my' }),
    'Hello <span>ဟယ်လို</span> world <span>ကမ္ဘာကြီးကို</span>!'
  );

  // Malayalam
  assert.strictEqual(
    swapLang('Hello world! ഹലോ വേൾഡ്!', { lang: 'ml' }),
    'Hello world! <span>ഹലോ</span> <span>വേൾഡ്</span>!'
  );
  assert.strictEqual(
    swapLang('Hello ഹലോ world ലോകം!', { lang: 'ml' }),
    'Hello <span>ഹലോ</span> world <span>ലോകം</span>!'
  );

  // Tamil
  assert.strictEqual(
    swapLang('Hello world! ஹலோ உலகம்!', { lang: 'ta' }),
    'Hello world! <span>ஹலோ</span> <span>உலகம்</span>!'
  );
  assert.strictEqual(
    swapLang('Hello வணக்கம் world உலகம்!', { lang: 'ta' }),
    'Hello <span>வணக்கம்</span> world <span>உலகம்</span>!'
  );

  // Telugu
  assert.strictEqual(
    swapLang('Hello world! హలో వరల్డ్!', { lang: 'te' }),
    'Hello world! <span>హలో</span> <span>వరల్డ్</span>!'
  );
  assert.strictEqual(
    swapLang('Hello హలో world ప్రపంచం!', { lang: 'te' }),
    'Hello <span>హలో</span> world <span>ప్రపంచం</span>!'
  );

  // Thai
  assert.strictEqual(
    swapLang('Hello world! สวัสดีชาวโลก!', { lang: 'th' }),
    'Hello world! <span>สวัสดีชาวโลก</span>!'
  );
  assert.strictEqual(
    swapLang('Hello สวัสดีชาวโลก world!', { lang: 'th' }),
    'Hello <span>สวัสดีชาวโลก</span> world!'
  );
});

test('other tags', function (assert) {
  assert.plan(3);

  // DIV
  assert.strictEqual(
    swapLang('Hello world! こんにちは世界', { tag: 'div' }),
    'Hello world! <div>こんにちは世界</div>'
  );
  assert.strictEqual(
    swapLang('こんにちは世界 Hello world!', { tag: 'div' }),
    '<div>こんにちは世界</div> Hello world!'
  );
  assert.strictEqual(
    swapLang('H こ E ん L に L ち O は', { tag: 'div' }),
    'H <div>こ</div> E <div>ん</div> L <div>に</div> L <div>ち</div> O <div>は</div>'
  );
});

test('other class name', function (assert) {
  assert.plan(3);

  // DIV
  assert.strictEqual(
    swapLang('Hello world! こんにちは世界', { class: 'ja' }),
    'Hello world! <span class="ja">こんにちは世界</span>'
  );
  assert.strictEqual(
    swapLang('こんにちは世界 Hello world!', { class: 'ja' }),
    '<span class="ja">こんにちは世界</span> Hello world!'
  );
  assert.strictEqual(
    swapLang('H こ E ん L に L ち O は', { class: 'ja' }),
    'H <span class="ja">こ</span> E <span class="ja">ん</span> L <span class="ja">に</span> L <span class="ja">ち</span> O <span class="ja">は</span>'
  );
});
