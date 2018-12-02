/**
 * Created by KJY on 2018/12/1.
 */
$(function () {
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getsitenav",
        success: function (data) {
            console.log(data);
            $(".proNavContent").html(template("tpl",{list:data.result}));
        }
    })

});

// 回到顶部按钮
$(".to_top").click(function(){
    $('html,body').animate({
        scrollTop:0
    },500);
});