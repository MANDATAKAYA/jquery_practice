$(function(){//select-boxクラスを持つ要素が変化した際に以下の処理を行う
  $(".select-box").on("change",
  function(){//select-boxクラスの値を変数vに代入する
  let v = $(this).val();//food-list li要素を変数dに代入する
  let d = $(".food-list li"); //すべての具材を出すフォーム
  //もしすべての値がフォームに変化している際は
  if("all" === v){//food-list liの値を表示する
  d.show();//肉と分類されるフォーム
  }else if("meat" === v){ //meatという値がフォームで変化する際は以下処理を行う
    $('.food-list li[data-category-type ="meat"]').show();//data-category-type ="meat"のデータを持つ要素を表示させる
    $('.food-list li[data-category-type ="fish"]').hide();//data-category-type ="fish"のデータを持つ要素を隠す
    $('.food-list li[data-category-type ="vegetable"]').hide();//data-category-type ="vegetable"のデータを持つ要素を隠す
    $('.food-list li[data-category-type ="fruit"]').hide();//data-category-type ="fruit"のデータを持つ要素を隠す
    //魚と分類されるフォーム
  }else if ("fish" === v){//fishという値がフォームで変化する際は以下処理を行う
    $('.food-list li[data-category-type ="fish"]').show();//data-category-type ="fish"のデータを持つ要素を表示させる
    $('.food-list li[data-category-type ="meat"]').hide();//data-category-type ="meat"のデータを持つ要素を表隠す
    $('.food-list li[data-category-type ="vegetable"]').hide();//data-category-type ="vegetable"のデータを持つ要素を隠す
    $('.food-list li[data-category-type ="fruit"]').hide();//data-category-type ="fruit"のデータを持つ要素を隠す
    //野菜と分類されるフォーム
    }else if ("vegetable" === v){//vegetableという値がフォームで変化する際は以下処理を行う
      $('.food-list li[data-category-type ="vegetable"]').show();//data-category-type ="vegetable"のデータを持つ要素を表示させる
      $('.food-list li[data-category-type ="meat"]').hide();//data-category-type ="meat"のデータを持つ要素を隠す
      $('.food-list li[data-category-type ="fish"]').hide();//data-category-type ="fish"のデータを持つ要素を隠す
      $('.food-list li[data-category-type ="fruit"]').hide();//data-category-type ="fruit"のデータを持つ要素を隠す
    //果物と分類されるフォーム
    }else {//fruitという値がフォームで変化する際は以下処理を行う
      $('.food-list li[data-category-type ="fruit"]').show();//data-category-type ="fruit"のデータを持つ要素を表示させる
      $('.food-list li[data-category-type ="meat"]').hide();//data-category-type ="meat"のデータを持つ要素を隠す
      $('.food-list li[data-category-type ="fish"]').hide();//data-category-type ="fish"のデータを持つ要素を隠す
      $('.food-list li[data-category-type ="vegetable"]').hide();//data-category-type ="vegetable"のデータを持つ要素を隠す
    }
  });
  });