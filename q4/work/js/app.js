$(function () {
    const navs = $(".nav li"),//変数navsにjQueryオブジェクトを代入する。
          descriptions = $(".description li");//変数descriptionsにjQueryオブジェクトを代入する
    navs.click(function () {//.nav liクラスを持つ要素をクリックした際に以下の処理を行う
        const i = navs.index(this);//変数iは.nav liクラスを持つ要素のインデックス番号を代入する
        descriptions.addClass("is-hidden");//表示されている部分を消す
        descriptions.eq(i).removeClass("is-hidden");//is-hiddenクラスを消すことにより、ボタンを押した際に表示されたように見える。eq();を使いインデックス番号で紐づける。
    });
});