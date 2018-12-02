/**
 * Created by KJY on 2018/11/30.
 */

$(function(){
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getcoupon",
        success:function(data){
            console.log(data);
            $(".p_box").html(template("tpl",{list:data.result}));
        }
    });

    // 回到顶部按钮
    $(".to_top").click(function(){
        $('html,body').animate({
            scrollTop:0
        },500);
    });

});
