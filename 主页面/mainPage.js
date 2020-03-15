var date = new Date();

var year=date .getFullYear(); //获取完整的年份(4位)

var month=date .getMonth(); //获取当前月份(0-11,0代表1月)

if(month<10) month="0"+month;

var day=date .getDate(); //获取当前日(1-31)

if(day<10) day="0"+day;

//date .toLocaleString( ); //获取日期与时间

var mytime=date.toLocaleTimeString(); //获取当前时间

var Hour=date .getHours(); //获取当前小时数(0-23)

var Min=date .getMinutes(); //获取当前分钟数(0-59)

if(Min<10) Min="0"+Min;

var time=document.getElementById("headLine2");

time.textContent="当前时间是"+year+"年"+month+"月"+day+"日 "+Hour+":"+Min;

var btnBook=document.getElementById("btn-book");

function start(){
    btnBook.className="btn_book";
    btnBook.disabled=false;
    //相当于发布预约
    Post_init();
}

function end(){
    btnBook.className="btn_book-unactive";
    btnBook.disabled=true;
}


function Post_init(){
    //设置口罩数目
    var num=document.getElementById('maskNums').value;
    //alert("口罩数目设为 "+num);
   
    var startTime;
    var endTime;
    //设置开始时间
    startTime=year+"-"+month+"-"+day+" "+Hour+":"+Min+":"+date.getSeconds();
   //结束时间
    if(Hour+2<24){
        //不进行更进一步的进位
        endTime=year+"-"+month+"-"+day+" "+(Hour+2)+":"+Min+":"+date.getSeconds();
    }
    else{
        var newHour=24;
        endTime=year+"-"+month+"-"+day+" "+newHour+":"+Min+":"+date.getSeconds();
    }

   //alert(startTime);
   //alert(endTime);
    if(num!=null){
      str="start_time="+startTime+"&end_time"+endTime+"&mask_number"+num;
    }
    else{
      //使用系统默认口罩数目
      str="start_time="+startTime+"&end_time"+endTime;
    }
    
    var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
    
  xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    //此时请求结束获取返回值
    
    }
  }
        xmlhttp.open("POST","118.178.184.69:8886/addLottery",true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded"); 
        xmlhttp.send(str);
}