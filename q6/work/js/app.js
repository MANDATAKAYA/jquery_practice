//オブジェクト.each(function(index,element))→ループ処理をする

$(".select-box").on("click", function () {//select-bxクラスが変化すると以下処理を行う
  const foodName = $(this).val();//変数food_nameにselect-boxの値を代入する
  //food_nameの値がallの場合の処理
  if (foodName === "all") {//一致する場合
    $(".food-list").find("li").show();//food-listの子孫要素liを表示する
    //food_nameの値がall以外の処理
  } else {//その他の場合
    $(".food-list").find("li").each(function (index, element) {//food-listクラス子要素li要素をそれぞれループ処理する
      //food_nameの値とfood-listの子孫要素li要素のデータが一致する場合
      if (foodName === $(element).data("category-type")) {//一致する場合
        $(element).show();//表示する
        //food_nameの値とfood-listの子孫要素li要素のデータが一致しない場合
      } else {//その他の場合
        $(element).hide();//表示しない
      }
    })
  }
})