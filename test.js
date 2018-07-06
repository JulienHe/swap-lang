/* This program is free software. It comes without any warranty, to
     * the extent permitted by applicable law. You can redistribute it
     * and/or modify it under the terms of the Do What The Fuck You Want
     * To Public License, Version 2, as published by Sam Hocevar. See
     * http://www.wtfpl.net/ for more details. */
     var swapLang = require("./");
     var test = require("tape");
     
     test('normal cases', function (assert) {
       assert.plan(7);
       assert.strictEqual(swapLang('Hello world! こんにちは世界'), 'Hello world! <span>こんにちは世界</span>');
       assert.strictEqual(swapLang('こんにちは世界 Hello world!'), '<span>こんにちは世界</span> Hello world!');
       assert.strictEqual(swapLang('世界 Hello world! こんにちは'), '<span>世界</span> Hello world! <span>こんにちは</span>');
       assert.strictEqual(swapLang('世界 Hello こんにちは world!'), '<span>世界</span> Hello <span>こんにちは</span> world!');
       assert.strictEqual(swapLang('H こ E ん L に L ち O は'), 'H <span>こ</span> E <span>ん</span> L <span>に</span> L <span>ち</span> O <span>は</span>');
       assert.strictEqual(swapLang('水行末 雲来末 風来末、やぶら小路の藪柑子、食う寝る処に住む処。海砂利水魚の、パイポパイポ パイポのシューリンガン、寿限無、寿限無。シューリンガンのグーリンダイ。パイポパイポ パイポのシューリンガン、長久命の長助。水行末 雲来末 風来末、長久命の長助。五劫の擦り切れ、やぶら小路の藪柑子。シューリンガンのグーリンダイ。食う寝る処に住む処。五劫の擦り切れ。寿限無、寿限無、グーリンダイのポンポコピーのポンポコナーの。海砂利水魚の、グーリンダイのポンポコピーのポンポコナーの。Lorem ipsum dolor sit amet, sit tota causae at, vix ne iudico persecuti rationibus, sed te meliore menandri persecuti. Mei quis ridens no. Te pri dolorum volutpat, sea qualisque maluisset eu. Mei nihil causae no, ne vis wisi assum.'), '<span>水行末</span> <span>雲来末</span> <span>風来末、やぶら小路の藪柑子、食う寝る処に住む処。海砂利水魚の、パイポパイポ</span> <span>パイポのシューリンガン、寿限無、寿限無。シューリンガンのグーリンダイ。パイポパイポ</span> <span>パイポのシューリンガン、長久命の長助。水行末</span> <span>雲来末</span> <span>風来末、長久命の長助。五劫の擦り切れ、やぶら小路の藪柑子。シューリンガンのグーリンダイ。食う寝る処に住む処。五劫の擦り切れ。寿限無、寿限無、グーリンダイのポンポコピーのポンポコナーの。海砂利水魚の、グーリンダイのポンポコピーのポンポコナーの。</span>Lorem ipsum dolor sit amet, sit tota causae at, vix ne iudico persecuti rationibus, sed te meliore menandri persecuti. Mei quis ridens no. Te pri dolorum volutpat, sea qualisque maluisset eu. Mei nihil causae no, ne vis wisi assum.');
       assert.strictEqual(swapLang('Lorem ipsum dolor sit amet, sit tota causae at, vix ne iudico persecuti rationibus, sed te meliore menandri persecuti. Mei quis ridens no. Te pri dolorum volutpat, sea qualisque maluisset eu. Mei nihil causae no, ne vis wisi assum. 水行末 雲来末 風来末、やぶら小路の藪柑子、食う寝る処に住む処。海砂利水魚の、パイポパイポ パイポのシューリンガン、寿限無、寿限無。シューリンガンのグーリンダイ。パイポパイポ パイポのシューリンガン、長久命の長助。水行末 雲来末 風来末、長久命の長助。五劫の擦り切れ、やぶら小路の藪柑子。シューリンガンのグーリンダイ。食う寝る処に住む処。五劫の擦り切れ。寿限無、寿限無、グーリンダイのポンポコピーのポンポコナーの。海砂利水魚の、グーリンダイのポンポコピーのポンポコナーの。'), 'Lorem ipsum dolor sit amet, sit tota causae at, vix ne iudico persecuti rationibus, sed te meliore menandri persecuti. Mei quis ridens no. Te pri dolorum volutpat, sea qualisque maluisset eu. Mei nihil causae no, ne vis wisi assum. <span>水行末</span> <span>雲来末</span> <span>風来末、やぶら小路の藪柑子、食う寝る処に住む処。海砂利水魚の、パイポパイポ</span> <span>パイポのシューリンガン、寿限無、寿限無。シューリンガンのグーリンダイ。パイポパイポ</span> <span>パイポのシューリンガン、長久命の長助。水行末</span> <span>雲来末</span> <span>風来末、長久命の長助。五劫の擦り切れ、やぶら小路の藪柑子。シューリンガンのグーリンダイ。食う寝る処に住む処。五劫の擦り切れ。寿限無、寿限無、グーリンダイのポンポコピーのポンポコナーの。海砂利水魚の、グーリンダイのポンポコピーのポンポコナーの。</span>');
     });
     
     test('other languages', function (assert) {
       assert.plan(2);
       assert.strictEqual(swapLang('Hello world! مرحبا بالعالم', {lang: 'ar'}), 'Hello world! <span>مرحبا</span> <span>بالعالم</span>');
       assert.strictEqual(swapLang('Hello مرحبا world! بالعالم', {lang: 'ar'}), 'Hello <span>مرحبا</span> world! <span>بالعالم</span>');
     });