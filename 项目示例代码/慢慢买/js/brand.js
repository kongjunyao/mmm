/**
 * Created by KJY on 2018/12/1.
 */
var productId = 1;
// 获取参数工具对象
var tools = {
    getParamObj : function(){
        var obj = {};
        var search = decodeURI(location.search);
        var arr = search.slice(1).split("&");
        arr.forEach(function(e){
            obj[e.split("=")[0]] = e.split("=")[1];
        });
        return obj;
    },
    getParam : function(key){
        return this.getParamObj()[key];
    }
}

var brandtitleid = tools.getParam("brandtitleid");


$.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getbrand",
    data:{
        brandtitleid:brandtitleid
    },
    success:function(data){
        console.log(data);
        $(".brand_list_wrap").html(template("tpl",{list:data.result}));
    }
});

$.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getbrandproductlist",
    data:{
        brandtitleid:brandtitleid,
        pagesize:5
    },
    success:function(data){
        console.log(data);
        productId = data.result[0].productId;
        console.log(typeof (productId));
        $(".product_list_wrap").html(template("tpl2",{list:data.result}));
    }
});



$.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getproductcom",
    data:{
        productid : productId
    },
    success:function(data){
        console.log(data);
        $(".comment_list_wrap").html(template("tpl3",{list:data.result}));
    }
});

// 回到顶部按钮
$(".to_top").click(function(){
    $('html,body').animate({
        scrollTop:0
    },500);
});



