// ==UserScript==
// @name adpaper_delite
// @description 見難いってありゃしない(´・ω・｀)	
// @namespace http://shioneko.sakura.ne.jp/
// @version 1.60
// @include *
// @updateURL https://raw.githubusercontent.com/KurohimeAkari/userscript/master/addPaper.user.js
// @installURL https://raw.githubusercontent.com/KurohimeAkari/userscript/master/addPaper.user.js
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

