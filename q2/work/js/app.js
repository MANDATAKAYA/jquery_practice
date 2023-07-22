$(function(){
    $(".modal_open_button").click(function(){ //modal_open_buttonのクラスを持つ要素をクリックした際に以下を処理する
        $(".modal_win").fadeIn()//fadeinメソッドでモーダル部分を表示させる。
    });
    $(".modal_close_button").click(function(){//modal_close_buttonのクラスを持つ要素をクリックした際に以下を処理する
        $(".modal_win").fadeOut() //fadeOutメソッドでモーダル部分を消す
    });
});