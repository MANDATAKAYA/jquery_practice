//1.検索した値が同じ場合はpageCountを1に戻す、違う場合は1増えていく
//2.検索したものを持ってきてlist要素の範囲に検索結果を記入する関数を用意する。(search関数の用意)→成功、失敗した際に表示できるように関数を用意する
//3.通信の準備
//4.通信が成功した場合、通信が失敗した場合の処理 関数化する
//5.リセットボタンの処理

  //2.検索したデータをlistクラスを持つ要素部分に表示する関数を用意(search関数の用意)
  //dc:creator→作者情報dc:publisher→出版社情報 @id→リンクサイト
  $(function () {
    function search(data) {//serch関数を用意、引数data
      //配列のループ
      let array = data[0].items;//変数arrayに配列を代入する
      console.log(array);
      $.each(array,function (index,items) {//各繰り返し処理で実行したい関数を指定する。each(インデックス番号,function関数の用意)
      let d = '<li class="lists-item"><div class="list-inner"><p>タイトル:' +//変数dを用意。タイトルを表示する
      items.title//titleがつくデータを持ってくる→タイトルのデータがtitleに格納されているため
      +"</p><p>作者 : " +//作者を表示する
      items["dc:creator"]//dc:createrがつく配列のデータを持ってくる→作者のデータがdc:createrに格納されているため
      +"</p><p>出版社 : "//出版社を表示する
      +items["dc:publisher"]//dc:publisherがつく配列のデータを持ってくる→出版社のデータがdc:publisherに格納されているため
      +'</p><a href="'//リンク部分の表示
      +items["@id"]//@idがつく配列のデータを持ってくる→書籍情報のデータが@idに格納されているため
      +'" target="_blank">書籍情報</a></div></li>';//書籍情報を表示。押すと外部に開くようにtarget属性を指定する
      $(".lists").prepend(d)//変数dを表示する。
      });
    }
  //1.検索した値が同じ場合はpageCountを1に戻す、違う場合は1増えていく
  let pageCount = 1;//変数pageCountの初期値1
  let prev_searchword = "";//指定していない値
  $(".search-btn").on("click", function () {//検索ボタンを押した際に以下の処理を行う
  $(".lists").empty();//listsクラス部分を空にする。
  let searchWord = $("#search-input").val();//変数searchWordにsearch-inputの要素の値を代入する
  if(searchWord == prev_searchword){//もし、検索値が同じ場合は以下処理を行う
  pageCount +=1;//listの表示を空にする。
  }else{//それ以外の場合は(違う)以下処理を行う
    pageCount = 1;//pagecountを1にする
    $(".lists").empty();
  }
    //3.通信の準備
  // 変数settingsに設定情報などを格納
  if(searchWord){
  const settings = {
    // 実行するURL。実行するURLのことをエンドポイントと言います。
    url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,//通信したいurlを用意する
    method: "GET"//通信手段GET
    }
    // Ajaxの実行
    $.ajax(settings)
    .done(function(response) {//.doneが通信成功した時の処理、”response”が引数となっていて通信した結果を受け取っている
      if(response["@graph"][0]['opensearch:totalResults'] == 0){
        $(".lists").append('<div class="message"><p><br>検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</p></div>');
        console.log(response);
      }else{
        search(response["@graph"]);
      }//search関数を呼び出す。@graphがつくデータを引き渡す。@graphにタイトル～書籍情報が格納されているため。
    //.failが通信に失敗した時の処理、”err”にサーバーから送られてきたエラー内容を受け取っている。
    })
    .fail(function (err) {
      $(".lists").empty();
      switch (err.status){
        case 400:
          $(".lists").append('<div class="message"><p><br>検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</p></div>');
        break;
      }
  })
}else{
  $(".lists").append('<div class="message"><p><br>検索キーワードが有効ではありません。<br>別のキーワードで検索してください。</p></div>');
}
  prev_searchword = searchWord});
    //リセットボタン
    $(".reset-btn").on("click", function () {//リセットボタンを押した際に以下の処理を行う
      $(".lists").empty();//listsクラス部分を空にする。
      $("#search-input").val("")//検索ボックスの値を空にする。
      });
  });
