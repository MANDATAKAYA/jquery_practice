//1.検索した値が前の値と同じ場合は上書きする。違う場合は初期に戻す処理
//2.非同期通信が成功した際、API先のオブジェクトを持ってき、リスト要素に追加させる処理
//3.非同期通信の準備,通信成功、通信失敗時の処理
//4.リセットボタンの処理(検索BOXの値を消す,listsクラス部分を消す,最初の配列からやり直し)

//変数準備
let pageCount = 1;//カウントをとる変数
let prevSearchWord = "";//前の検索ワードの変数
//1.
$(".search-btn").on("click", function () {//検索ボタンを押した時の処理
  const searchWord = $("#search-input").val();//検索値の変数。valメソッド()
  if (searchWord === prevSearchWord) {//検索値が前の検索値と合致したら
    pageCount++;//表示部分を上書き
  } else {//検索値が前の検索値と違ったら
    pageCount = 1;//表示部分を初期に戻す
    $(".lists").empty();//表示部分を空にする。emptyメソッド()
    prevSearchWord = searchWord//検索値を前の検索値に代入
  }
  //3.
  if (searchWord) {//検索ワードが存在する場合
    const settings = {//変数settingsにAPI情報を格納する
      url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,//通信したいurlを用意する(図書館の情報)
      method: "GET"//通信手段をGETメソッド
    }
    // Ajaxの実行
    $.ajax(settings)//Ajaxリクエストを送信するURLを引数。非同期通信。
      .done(function (response) {
        success(response);
      })//通信成功時、success関数を呼びだす。doneメソッド,done(function)
      .fail(function (err) {
        failure(err);
      })//通信失敗時、failure関数を呼びだす。failメソッド,fail(function)
    //検索の値が検索ボックスに存在しない場合
  } else {
    $(".lists").append('<div class="message"><p><br>検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</p></div>');//listsクラスにメッセージを表示する
  }
});
//通信成功時の関数
function success(response) {
  function createHtml(data) {//createHtml関数を用意
    let books = data[0].items;//配列を用意。
    $.each(books, function (index, items) {//複数オブジェクトに対して繰り返し処理を行う。$each(配列,function(index,要素))
      const title = items.title;
      const titleText = title ? "タイトル：" + title : "タイトル：タイトル不明"
      const author = items["dc:creator"];
      const authorText = author ? "作者：" + author : "作者：作者不明"//作者不明かどうか判断する
      const publisher = items["dc:publisher"];
      const publisherText = publisher ? "出版社：" + publisher : "出版社：出版社不明"
      $(".lists").prepend(//書籍情報のデータをを表示させる
        ('<li class="lists-item"><div class="list-inner"><p>' + titleText//タイトルのデータを表示させる
          + "</p>" + "<p>" + authorText//作者のデータを表示させる
          + "</p>" + "<p>" + publisherText//出版社のデータを表示させる
          + "</p>" + '<a href="' + items["@id"] + '" target="_blank">書籍情報</a></div></li>'))
    });
  }//通信成功した時の処理。引数responseにAPIのデータが格納されるようにする
  if (response["@graph"][0]['opensearch:totalResults'] != 0) {//検索結果総数が存在する場合
    createHtml(response["@graph"]);//listsクラスで表示したい部分が格納されている@graph配列データを引き渡す。
  } else {//もし検索結果総数が存在しない場合
    $(".lists").append('<div class="message"><p><br>検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</p></div>');//listsクラスにメッセージを表示させる。
  }
}
//通信失敗時の関数
function failure(err) {//通信が失敗した時の処理
  if (err.status === 400) {
    $(".lists").append('<div class="message"><P><br>検索結果が見つかりませんでした。<br>別のキーワードで検索してください</p></div>');//処理が完了できなかった場合
  } else if (err.status === 0) {
    $(".lists").append('<div class="message"><P>検索ワードを見直してください</p></div>');//ネットワークエラー時、指定したURLが正しくない場合
  } else {
    $(".lists").append('<div class ="message"><p><br>エラーが発生しました。<br>再度検索をお試し下さい。</p></div>')
  }
}
//4.
$(".reset-btn").on("click", function () {//リセットボタンを押した時の処理
  pageCount = 1;//pagecount変数に1を代入する
  prevSearchWord = "";//前の検索値を削除する
  $("#search-input").val("");//検索ボックスの値を表示させない
  $(".lists").empty();//list部分を表示させない
  $(".message").remove();//エラーメッセージを削除する
});