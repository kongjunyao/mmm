/**
 * Created by KJY on 2018/11/29.
 */


var currentPage = 1;
var totlePage;
function render(pageid){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getmoneyctrl",
        type:"get",
        dataType : "json",
        data: {
            pageid: pageid
        },
        success : function(info){
            console.log(info);
            console.log(typeof (info));
            totlePage = Math.ceil(info.totalCount / info.pagesize);
            var htmlStr = template("listTpl", info );
            $(".list_main ul").html( htmlStr );
            $(".page .select").html(currentPage+"/"+totlePage);
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
