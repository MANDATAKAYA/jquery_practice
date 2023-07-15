//Q1 id要素の色を変える
$(function () {
    $("#q1").css("color", "#006400");//q1のid要素のcolorを#006400に変える
});

//Q2 id要素の背景色を変える
$(function () {
    $("#q2").on("click", function () {//id="q2"を持つ要素をクリックした際、以下の処理を行う
        $(this).css("backgroundColor", "#ffc0cb");//q2のidの要素の背景色を#ffc0cbに変更する
    });
});

//Q3クリックした際にフェイドアウト
$(function () {
    const duration = 3000;//変数durationに3000を代入する
    $("#q3").on("click", function () {//q3の要素をクリックした際に以下処理を適用する
        $(this).fadeOut(duration); //#q3がfadeoutする。3秒かけて(引数duration)
    });
});

//Q4 addClass→指定した要素にクラスを付与。largeクラスを#q4に付与し、大きく見せる。
$(function () {
    $("#q4").on("click", function () { //q4の要素をクリックした際に以下処理をする
        $(this).addClass("large");//q4の要素にlargeクラスを加える
    });
});

//Q5 dom操作
$(function () {
    $("#q5").on("click", function () {//q5の要素をクリックした際に以下処理を適用する
        $(this)//q5要素にhtmlを追加する
            .before("<span>DOMの前</span>")//要素の前にspan要素を追加する
            .after("<span>DOMの後</span>")//要素の後ろにspan要素を追加する
            .prepend("<span>DOMの中の前</span>")//指定の要素の子要素の先頭にspan要素を追加する
            .append("<span>DOMの中の後</span>")//指定の要素の子要素の末尾にspan要素を追加する
    });
});

//Q6 クリックして移動
$(function () {
    const second = 2000;//変数secondに2000を代入する
    const tr = 100;//変数trに100を代入する。
    $("#q6").on("click", function () {//#q6をクリックした際に以下処理をする
        $(this).animate({//#q6をアニメーション処理をする
            "margin-top": tr, "margin-left": tr//上100px,左100px移動する
        }, second);//2秒間継続させる
    });
});

//Q7 コンソールに表示
$(function () {
    $("#q7").on("click", function () {//q7をクリックしたとき以下処理する
        console.log(this);//console.logメソッドで#q7のノードを表示する
    });
});

//q8
$(function () {
    $("#q8").hover(function () {//#q8をホバーした際に以下の処理を行う
        $(this).addClass("large")//#q8にlargeクラスを付与する
    },
        //hoverしなくなった際の処理
        function () {
            $(this).removeClass("large")//ホバーをしない際はlargeクラスを外す
        });
});

//q9 alertメソッド アラートにインデックス番号を入れる
$(function () {
    $("#q9 li").on("click", function () {//#9の要素の子要素liをクリックした際に以下の処理をする
        const index = $("#q9 li").index(this);//変数indexに#q9の要素の子要素li要素にインデックス番号を代入する
        alert(index)//インデックス番号をアラートする
    });
});

//q10 eq();を使い、インデックス番号を各々指定する。
$(function () {
    $("#q10 li").on("click", function () {//#10要素の子要素のli要素をクリックする際に以下処理をする。
        const i = $("#q10 li").index(this);//#10のli要素のインデックス番号を変数iに代入する。
        $("#q11 li").eq(i).addClass("large-text")//#11のli要素にlarge-textクラスを追加させる。#10 li要素のインデックス番号に紐づける。
    });
});