/*
 *	■郵便番号→ 住所自動入力機能の処理モジュール( zipaddr-jp.js Ver1.01 )
 *	Plugin URI: http://zipaddr2.com/wordpress/
 *	Author: Tatsuro, Terunuma
 *	Author URI: http://pierre-soft.com/
 */
	var Sysurl= get_syslib();      // ライブラリのurl
	Sysurl= '<script type="text/javascript" src="'+ Sysurl +'" charset="UTF-8"></script>';
	document.write(Sysurl);        // Load

function get_syslib(){
//ライブラリ取得先の定義
	var pn= "zipaddr2";
	var js= "zipaddr3";
	var Syslib= new Array();
	Syslib[0]= "https://"+ pn +".googlecode.com/svn/trunk/"+ js +"0.js"; // lib0
	Syslib[1]= "https://"+ pn +".googlecode.com/svn/trunk/"+ js + ".js"; // lib1
	Syslib[2]= "http://"+  pn +".com/js/"+                   js + ".js"; // lib2
	Syslib[3]= "https://"+ pn +"-com.ssl-xserver.jp/js/"+    js + ".js"; // lib3
	Syslib[4]= ""; // lib4
	Syslib[5]= ""; // lib5
	var Sysno= 1;                  // 現状の利用ライブラリNo
//現時点で最適なシステムを選択する。
	return Syslib[Sysno];
}
