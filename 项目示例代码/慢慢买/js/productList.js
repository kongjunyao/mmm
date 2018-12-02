/**
 * Created by KJY on 2018/11/29.
 */

var categoryid = location.search.slice(-1);
console.log(categoryid);
var totlePage;
var category;
var currentPage = 1;

$.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getcategorybyid",
    data: {
        categoryid: categoryid
    },
    success: function (data) {
        console.log(data);
        $(".nav_left").html(template("tpl", data));
        category = data.result[0].category;
        console.log(category);
    }
});

function render(pageid){
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getproductlist",
        data: {
            categoryid: categoryid,
            pageid: pageid
        },
        success : function(info){
            console.log(info);
            totlePage = Math.ceil(info.totalCount / info.pagesize);
            info.category = category ;
            console.log(info);
            console.log(totlePage);
            console.log(currentPage);
            $(".content").html(template("tpl2",info));

            $(".page .select").html(currentPage+"/"+totlePage);
            console.log($(".page .select").val());
        }
    });
}
render(currentPage);

$(".next").click(function(){
    if(currentPage >= totlePage){
        return false;
    }
    currentPage++;
    render(currentPage);
});


$(".prev").on("click",function(){
    if(currentPage <= 0){
        return false;
    }
    currentPage--;
    render(currentPage);
});

// 回到顶部按钮
$(".to_top").click(function(){
    $('html,body').animate({
        scrollTop:0
    },500);
});


