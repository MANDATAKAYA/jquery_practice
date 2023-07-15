$(function () {
    $(".drawer_button").click(function () {//drawer_buttonクラスの要素をクリックすると、以下の処理をする
        $(this).toggleClass("active");//.drawer_buttonクラスを交互にactiveクラスを追加させる。☓アイコンになる
        $(".drawer_nav_wrapper").toggleClass("open")//openクラスを追加する
        $(".drawer_bg").fadeToggle();//drawer_bgクラスをフェードイン、フェードアウトを交互に行う。drawer_bgクラスは背景を表す
    });
    $(".drawer_bg").click(function () {//背景をクリックすると
        $(".drawer_button").removeClass("active");//activeクラスを削除する。openロゴになる
        $(".drawer_nav_wrapper").removeClass("open")//openクラスを削除する。背景が消える。
        $(".drawer_bg").fadeOut();//背景を消える
    })
});