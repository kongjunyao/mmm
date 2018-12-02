/**
 * Created by KJY on 2018/11/28.
 */
$(function(){

    $.ajax({
        url:"http://127.0.0.1:9090/api/getindexmenu",
        type:"get",
        dataType : "json",
        success : function(info){
            console.log(info);
            console.log(typeof (info));
            var htmlStr = template("menuTpl", info );
            $(".menu ul").html( htmlStr );
        }
    });

  $(".menu ul").on("click",".more",function(){
      console.log($(this));
     $(this).nextAll().slideToggle();
  });


    $.ajax({
        url:"http://127.0.0.1:9090/api/getmoneyctrl",
        type:"get",
        dataType : "json",
        success : function(info){
            console.log(info);
            console.log(typeof (info));
            var htmlStr = template("listTpl", info );
            $(".list_main ul").html( htmlStr );
        }
    })

});

// 回到顶部按钮
$(".to_top").click(function(){
    $('html,body').animate({
        scrollTop:0
    },500);
});
