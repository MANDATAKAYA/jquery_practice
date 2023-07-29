let pageCount = 1;//変数pageCountに1を代入
let prevSearchword = "";//検索した前の値の変数prevSearchwordに空を代入する。

//1.検索した値が前の値と同じ場合はpageCountを1増えていく、違う場合は初期値1に戻す
$(".search-btn").on("click", function () {//検索ボタンを押した際に以下の処理を行う
    let searchWord = $("#search-input").val();//変数searchWordにsearch-inputの要素の値を代入する
        if(searchWord == prevSearchword){//もし、検索値が前回の検索地と同じ場合は以下処理を行う
        pageCount ++;//1増やす
        }else{//それ以外の場合は(違う)以下処理を行う
        pageCount = 1;//pagecountを1にする
        $(".lists").empty();//listsクラス部分を空にする。
        }
    //2.検索したデータをlistクラスを持つ要素部分に表示するsearch関数の用意。
    function search(data) {//serch関数を用意、引数data
    let array = data[0].items;//変数arrayに配列を代入する
        $.each(array,function (index,items) {//各繰り返し処理で実行したい関数を指定する。each(インデックス番号,function関数の用意)
            $(".lists").prepend('<li class="lists-item"><div class="list-inner"><p>タイトル:' +//リスト部分に表示される
            items.title//titleがつく配列のデータを持ってくる
            +"</p><p>作者 : "//作者を表示する
            +items["dc:creator"]//dc:createrがつく配列のデータを持ってくる
            +"</p><p>出版社 : "//出版社を表示する
            +items["dc:publisher"]//dc:publisherがつく配列のデータを持ってくる
            +'</p><a href="'//リンク部分の表示
            +items["@id"]//@idがつく配列のデータを持ってくる
            +'" target="_blank">書籍情報</a></div></li>')//書籍部分を表示する(リンクにとぶように)
        });
    }
    //3.通信の準備
    if(searchWord){//もし検索の値が検索ボックスに存在する場合以下の処理を行う
        const settings = {// 変数settingsに設定情報などを格納
        url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,//通信したいurlを用意する
        method: "GET"//通信手段をGETとする
        }
    // Ajaxの実行
    $.ajax(settings)//引数をsettingと指定する
    .done(function(response) {//通信成功した時の処理、”response”が引数となっていて通信した結果を受け取っている
        if(response["@graph"][0]['opensearch:totalResults'] == 0){//もしopensearch:totalResultが0の場合は
        $(".lists").append('<div class="message"><p><br>検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</p></div>');//listsクラスにメッセージを表示させる。
        }else{//opensearch:totalResultが0でない場合
        search(response["@graph"]);//search関数を呼び出す。@graphがつくデータを引き渡す。
        }
    })
    //.failが通信に失敗した時の処理、”err”にサーバーから送られてきたエラー内容を受け取っている。(失敗した際にメッセージを出す。上記で記載されているが念のため記載)
    .fail(function (err) {//通信が失敗した時の処理
    switch (err.status){//errのステータス
    case 400://ステータスが400の場合
        $(".lists").append('<div class="message"><p><br>検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</p></div>');//listsクラスにメッセージを表示する
    break;
    }
    })
    //検索の値が検索ボックスに存在しない場合
    }else{
    $(".lists").append('<div class="message"><p><br>検索キーワードが有効ではありません。<br>別のキーワードで検索してください。</p></div>');//listsクラスにメッセージを表示する
    }
    prevSearchword = searchWord//検索ボックスの値をprev_searchWordに代入する。
});
//5.リセットボタンの実施
$(".reset-btn").on("click", function () {//リセットボタンを押した際に以下の処理を行う
    $(".lists").empty();//listsクラス部分を空にする。
    $("#search-input").val("");//search-inputの値を空にする
});
