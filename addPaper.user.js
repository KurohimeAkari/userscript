// ==UserScript==
// @name 邪魔な広告を導入するだけで削除させる。
// @description 見難いってありゃしない(´・ω・｀)	
// @namespace http://shioneko.sakura.ne.jp/
// @version 1.00
// @include *
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js
// ==/UserScript==

// --------------------------------------------------------------------
var Adskips = [
// --------------------------------------------------------------------
// "id や Class"をカンマで区切ってください。
"#fc2_bottom_bnr","#fc2_ad_box",".headerBanner",".sideBanner",".footerBanner","#ninja-hp-inactive","#ninja-hp-inactive-footer",".tdftad"
// --------------------------------------------------------------------
]
// --------------------------------------------------------------------

$(function () {
	$(Adskips.join(",")).remove();
});

