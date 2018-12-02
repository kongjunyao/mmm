/**
 * Created by KJY on 2018/11/30.
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
};

var couponid = tools.getParam("couponid");
console.log(couponid);
$.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getcouponproduct",
    data:{
        couponid:couponid
    },
    success:function(data){
        console.log(data);
        var oldArr = data.result;
        oldArr.forEach(function(e,i){
            var temp = e.couponProductImg.split(' ')[1];
            temp = temp.split("src=")[1].slice(1).slice(0,-1);
            data.result[i].imgSrc = temp;
        });
        $(".list_item").html(template("tpl",{list:data.result}));
    }
});

// 回到顶部按钮
$(".to_top").click(function(){
    $('html,body').animate({
        scrollTop:0
    },500);
});