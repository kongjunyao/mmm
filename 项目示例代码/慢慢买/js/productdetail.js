/**
 * Created by KJY on 2018/11/29.
 */


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


     var productid = tools.getParam("productId");
     console.log(productid);

    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getproduct",
        data: {
            productid: productid
        },
        success: function (data) {
            var brandName = tools.getParam("brandName");
            var category = tools.getParam("category");
            data.result[0].brandName = brandName;
            data.result[0].category = category;
            $(" .nav_left").html(template("tpl", data));
        }
    });



    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getproduct",
        data:{
            productid:productid,
        },
        success:function(data){
            console.log(data);
            $(".imgbox").html(template("tpl2",{list:data.result}));
        }
    });



    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getproductcom",
        dataType : "json",
        data:{
            productid : productid
        },
        success:function(data){
            console.log(data);
            $(".user_com").html(template("tpl3",{ list : data.result }));
        }
    });

// 回到顶部按钮
$(".to_top").click(function(){
    $('html,body').animate({
        scrollTop:0
    },500);
});



