$(function () {
    $(".dropdwn li").hover(function () {//クラスdropdownの要素をホバーした際に以下処理を行う
        $(this).find("ul").stop().slideToggle(500);//クラスdropdownの要素のすべての子要素が500ミリ秒をかけてスライドアップをしたりダウンしたりする。ただ途中でキャンセルできる
    });
});