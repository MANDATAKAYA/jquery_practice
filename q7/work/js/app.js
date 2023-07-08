//名字
$(function(){
    $(".btn__submit").on("click", function(){//btn__submitの要素を押すと以下処理をする
    console.log("名字");//名字が表示される
    console.log($("#family__name").val()); //family_nameを持つ要素の値を表示する
//名前
    console.log("名前");//名前が表示される
    console.log($("#given__name").val());//given_nameを持つ要素の値を表示する
//生年月日
    console.log("生年月日");//生年月日が表示される
    console.log($(".year").val() + "年" + $(".month").val() + "月" + $(".day").val() + "日");//yearを持つ要素の値とmonthをもつ要素の値とdayをもつ要素の値を足したものを表示する
//性別
    console.log("性別");//性別が表示される
    $('[name="gender"]:checked').each(function() {//class="gender"を持つ要素がチェックされたものの値が表示される
    console.log($(this).val());//値が表示される
    });
//職業
    console.log("職業");//職業が表示される
    console.log($(".occupation").val());//occupationをもつ要素の値が表示される
//アカウント名
    console.log("アカウント名"); //アカウント名が表示される
    console.log($("#account__name").val());//account_nameをもつ要素の値を行う
//メールアドレス
    console.log("メールアドレス"); //メールアドレスを表示される
    console.log($("#email").val()); //emailの値を表示される
//パスワード
    console.log("パスワード"); //パスワードが表示される
    console.log($("#password").val());//passwordをもつ要素の値が表示される
//確認用パスワード
    console.log("確認用パスワード");//確認用パスワードが表示される
    console.log($("#duplication__password").val()); //duplication_passwordをもつ要素の値が表示される
//住所
    console.log("住所");//住所が表示される
    console.log($("#address").val());//addressを持つ要素の値が表示される
//電話番号
    console.log("電話番号"); //電話番号が表示される
    console.log($("#tel").val());//telをもつ要素の値が表示される
//購買情報
    console.log("購買情報");//購買情報が表示される
    $('[name="subscription"]:checked').each(function() {//チェックされたsubscriptionの要素の値が表示される
    console.log($(this).val());//それぞれの値が表示される
    });
    });
});