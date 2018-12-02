/**
 * Created by KJY on 2018/11/29.
 */
$.ajax({
    url : "http://127.0.0.1:9090/api/getinlanddiscount",
    type : "get",
    dataType : "json",
    success : function(info){
        console.log(info);
        $(".list_main ul").html(template("tpl",{list:info.result}))
    }
})

// 回到顶部按钮
$(".to_top").click(function(){
    $('html,body').animate({
        scrollTop:0
    },500);
});
