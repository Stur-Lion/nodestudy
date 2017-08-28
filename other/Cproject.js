/**
 * Created by Lion on 2017/7/25.
 */
/*
*   右侧弹窗效果
*   showiframe      展示
*   closeiframe     关闭
*   allowcallback   回调函数判断
*   addType         参数传递再还给callback
*   isImplement     判断是否执行回调函数 默认为false
* */
/*
eg:实例化对象rightDialog  $.extend(rightDialog)
*/
function RightDialog(){}
RightDialog.prototype={}
RightDialog.prototype.isImplement = false;
//展示方法
RightDialog.prototype.showiframe = function (arr,index,callback) {
    var callback = callback;
    console.log(callback);
    $('#rigth_iframe').attr('src','')
    $('body').css('overflow','hidden');
    //动态生成外部大盒子iframe标签
    if($('.showbox').length==0){
        var maxBox = document.createElement('div');
        maxBox.className = 'showbox';
        maxBox.innerHTML =
            '<h2><a class="close" href="#"></a></h2>'+
            '<ul class="left_tab"></ul>'+
            '<iframe src="" style="width:100%;height:100%" id="rigth_iframe"></iframe>';
        var shade = document.createElement('div');
        shade.className = "shade_box";
        shade.appendChild(maxBox);
        document.body.appendChild(shade);
    }
    $('.shade_box').css('display','block')
    $('.showbox').stop()
    $(".showbox").animate({top:60,opacity:'show',width:"92%",height:"92%",right:0},300);
    //生成左边按钮
    var html = '';
    for (var i = 0; i <arr.length; i++) {
        if(i==(index-1)){
            html+='<li url="'+arr[i].url+'" class="li_current" index="'+i+'">'+arr[i].name+'</li>';
        }else{
            html+='<li url="'+arr[i].url+'" index="'+i+'">'+arr[i].name+'</li>';
        }
    }
    $('.left_tab').html(html);
    //右上角关闭
    $(".showbox .close").unbind('click').bind('click',function(){
        dialog.closeiframe(callback);
    })
    //点击其他位置关闭弹窗
    $('.shade_box').unbind('click').bind('click',dialog.closeiframe);
    $(".showbox").click(function(event){
        event.stopPropagation();
    });
    //点击左侧按钮跳转
    $('.left_tab li').unbind('click').bind('click',function () {
        if($(this).hasClass('active')){
            return false
        }

        $('#rigth_iframe').attr('src',arr[$(this).attr('index')].url);

        $(this).addClass("active").siblings().removeClass("active");
    })
    console.log($('body .left_tab li').eq(index - 1));
    $('body .left_tab li').eq(index-1).click();
    return false;
}
//回调函数判断执行
RightDialog.prototype.allowcallback = function(type){
    RightDialog.prototype.isImplement = true;
    RightDialog.prototype.addType = type;
}
//关闭弹窗
RightDialog.prototype.closeiframe = function(callback){
    console.log(callback);
    $('.showbox').stop()
    $(".showbox").animate({top:"20px",opacity: 'hide',width:0,height:"90%",right:0},200,function () {
        $('.shade_box').css('display','none');
        $('body').css('overflow','auto');
        console.log(dialog.isImplement);
        if (typeof callback==='function' && dialog.isImplement) {
            console.log(1);
            callback(dialog.addType);
        }
    });
}
// 实例化对象放进$下面
var rightDialog = new RightDialog();
$.extend(rightDialog);



/*
* 表格坐标导入
* ele 存放元素 JQ（tbody）
* date 数组数据
*
*
* 数据格式声明 {"id":1,"product_id":1,"comment":"车系","from":"1,1","to":"2,1"}
* id、product_id 标识
* comment        内容
* from           开始坐标
* to             结束坐标
* */
function excel_coordinate(ele,date) {
    ele.css('display', 'block');
    var last_td = date[date.length - 1];
    var last_td_coordinate = last_td.to.split(',')//通过最后一个坐标，确定表格大小
    for (var i = 0; i < +last_td_coordinate[1]; i++) {
        ele.append('<tr row="' + (i + 1) + '" style="width: 100%;"></tr>');
        for (var j = 0; j < +last_td_coordinate[0]; j++) {
            ele.find('tr:last-child').append('<td style="height: 18px"></td>');
        }
    }
    //循环数据
    for (var i = 0; i < date.length; i++) {
        var start_coordinate = date[i].from.split(',');
        ele[0].rows[start_coordinate[1] - 1].cells[start_coordinate[0] - 1].innerHTML = date[i].comment;
        var end_coordinate = date[i].to.split(',')
        //行列都合并
        var coordinate_rows = end_coordinate[1] - start_coordinate[1] + 1;
        var coordinate_cells = end_coordinate[0] - start_coordinate[0] + 1;
        console.log(coordinate_rows);
        console.log(coordinate_cells);
        ele[0].rows[start_coordinate[1] - 1].cells[start_coordinate[0] - 1].rowSpan = coordinate_rows;
        ele[0].rows[start_coordinate[1] - 1].cells[start_coordinate[0] - 1].colSpan = coordinate_cells;
        for (var j = +(start_coordinate[0]); j < +(end_coordinate[0]); j++) {//先合并列
            ele[0].rows[start_coordinate[1] - 1].cells[j].style.display = "none";
        }
        for (var j = +(start_coordinate[1]); j < +(end_coordinate[1]); j++) {//再合并行
            console.log(start_coordinate[1]);
            ele[0].rows[j].cells[start_coordinate[0] - 1].style.display = "none";
            for (var k = +(start_coordinate[0]); k < +(end_coordinate[0]); k++) {//先合并列
                ele[0].rows[j].cells[k].style.display = "none";
            }
        }
    }
}
