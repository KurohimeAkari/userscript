// ==UserScript==
// @name 「ぽぷぽぷぽっぷん」でクリア分かりやすくする。
// @description 主にカラーリングや、クリアメダル別検索を実装予定
// @namespace http://shioneko.sakura.ne.jp/
// @version 1.00
// @include http://popupopupopnp.com/alldata/?level*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js
// @require http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.4/jquery-ui.min.js
// ==/UserScript==

// 未クリアのグラーデーションは　濃 > 薄
// クリアしてるものは 薄 のから 濃 にしてます。

$(document).ready(function () {
	// 未クリアの場合 （灰色）
	$("img[src*='1.gif']").each(function(){
		// メダルの要素の背景に色を付けてわかりやすくする。
		$(this).parent().parent().css({'background':'#b2b2b2'});
	});

	// もう少しでクリアの場合 （灰色）
	$("img[src*='2.gif']").each(function(){
		// メダルの要素の背景に色を付けてわかりやすくする。
		$(this).parent().parent().css({'background':'#bfbfbf'});
	});

	// かなり惜しい場合 （灰色）
	$("img[src*='3.gif']").each(function(){
		// メダルの要素の背景に色を付けてわかりやすくする。
		$(this).parent().parent().css({'background':'#cbcbcb'});
	});

	// 通常クリアの場合　（橙色）
	$("img[src*='4.gif']").each(function(){
		// メダルの要素の背景に色を付けてわかりやすくする。
		$(this).parent().parent().css({'background':'#ffe8e0'});
	});

	// 罰20以下クリアの場合　（橙色）
	$("img[src*='5.gif']").each(function(){
		// メダルの要素の背景に色を付けてわかりやすくする。
		$(this).parent().parent().css({'background':'#ffd5c7'});
	});

	// 罰5以下クリアの場合　（橙色）
	$("img[src*='6.gif']").each(function(){
		// メダルの要素の背景に色を付けてわかりやすくする。
		$(this).parent().parent().css({'background':'#ffc2ad'});
	});

	// フルコンの場合　（水色）
	$("img[src*='7.gif']").each(function(){
		// メダルの要素の背景に色を付けてわかりやすくする。
		$(this).parent().parent().css({'background':'#e0f7ff'});
	});

	// フルコンでなおかつGood 20以下（水色）
	$("img[src*='8.gif']").each(function(){
		// メダルの要素の背景に色を付けてわかりやすくする。
		$(this).parent().parent().css({'background':'#c7f0ff'});
	});

	// フルコンでなおかつGood 5以下（水色）
	$("img[src*='9.gif']").each(function(){
		// メダルの要素の背景に色を付けてわかりやすくする。
		$(this).parent().parent().css({'background':'#adeaff'});
	});

	// パフェ（黄色）
	$("img[src*='10.gif']").each(function(){
		// メダルの要素の背景に色を付けてわかりやすくする。
		$(this).parent().parent().css({'background':'#ffecad'});
	});
});