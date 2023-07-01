//descriptionクラスの子要素li要素に表示された文字を消す
//インデックス番号で紐づくボタンが押されると消された文字を表示するようにする。removeClassプロパティ

$(function () {
  let $navs = $(".nav li");//変数navsにjQueryオブジェクトを代入する。
  let $descriptions = $(".description li"); //変数descriptionsにjQueryオブジェクトを代入する
  $navs.click(function () {//.nav liクラスを持つ要素をクリックした際に以下の処理を行う
  let i = $navs.index(this);//変数iは.nav liクラスを持つ要素のインデックス番号を代入する
  $descriptions.addClass("is-hidden");  //表示される部分を消す
  $descriptions.eq(i).removeClass("is-hidden");//is-hiddenクラスを消すことにより、ボタンを押した際に表示されたように見える。eq();を使いインデックス番号で紐づける。
  });
  });