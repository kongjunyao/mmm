/**
 * Created by KJY on 2018/11/29.
 */

var productid = location.search.slice(-1);
console.log(productid);

    $.ajax({
        url:"http://127.0.0.1:9090/api/getdiscountproduct",
        type : "get",
        data : { productid : productid},
        dataType : "json",
        success : function(info){
            console.log(info);
            var htmlStr = template("tpl",info);
            $(".render").html(htmlStr);
        }
    })
// 回到顶部按钮
$(".to_top").click(function(){
    $('html,body').animate({
        scrollTop:0
    },500);
});

