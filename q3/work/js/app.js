$(function () { $(".drawer_button").click(function () {//drawer_buttonクラスの要素をクリックすると、以下の処理をする
    $(this).toggleClass("active");//.drawer_buttonクラスを交互にactiveクラスを追加させる。→バーガーアイコンを押すとblockプロパティが追加、☓ボタンを押すとnoneプロパティを追加する。
    $(".drawer_bg").fadeToggle();//drawer_bgクラスをフェードイン、フェードアウトを交互に行う。
    $(".drawer_nav_wrapper").toggleClass("open")});//openクラスを追加する
});