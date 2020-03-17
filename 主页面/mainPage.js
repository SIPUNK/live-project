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




window.onload=function(){
  //页面加载完毕时执行的方法
  alert("windows");
  btnBook.disabled=true;
  
  //var getTime1=CookieUtil.get("startTime");
  //var getTime2=CookieUtil.get("endTime");
  var getTime1=localStorage.startTime;
  var getTime2=localStorage.endTime;

  if(getTime1!=null&&getTime2!=null){
     var date=new Date();
     var myDate=date.toLocaleDateString();
     var time=new Date(myDate);
     this.alert("执行内部函数"+getTime1+"/"+time+"/"+getTime2);
     getTime1=new Date(Date.parse(getTime1));
     getTime2=new Date(Date.parse(getTime2));
     time=new Date(Date.parse(time));
     if(time>=getTime1&&time<getTime2){
       alert("Session remember you");
       btnBook.className="btn_book";
       btnBook.disabled=false;
     }else{
       this.alert("not inside");
       
     }
  }
  else{
    this.alert("not session");
  }
  //this.alert(getTime1+"/"+getTime2);
  //this.alert("执行结束");
  
}




function judgeTime(){
  //获取开始时间
  var sT=document.getElementById("StartTime").value;
  
  //获取结束时间
  var eT=document.getElementById("EndTime").value;
  //获取当前时间
  var myDate=new Date();
  var nt=myDate.toLocaleDateString(); 
  var sT_1=new Date(sT);
  var eT_1=new Date(eT);
  var nT_1=new Date(nt);
  
  //存储时间
  //CookieUtil.set("startTime", sT_1);
  //CookieUtil.set("endTime",eT_1);
  //SetCookie("st",sT_1);
  //SetCookie("et",eT_1);
  localStorage.startTime=sT_1;
  localStorage.endTime=eT_1;
  //alert(sT_1+"/"+eT_1+"/"+nT_1);
  //如果当前时间在开始时间和结束时间之间
  sT_1=new Date(Date.parse(sT_1));
  eT_1=new Date(Date.parse(eT_1));
  nT_1=new Date(Date.parse(nT_1));
  if(nT_1>=sT_1&&nT_1<eT_1){
    btnBook.className="btn_book";
    btnBook.disabled=false;
    alert("OKTime");
  }else{
    alert("Not OK");
  }

  var getTime1=localStorage.startTime;
  var getTime2=localStorage.endTime;
  
  
  alert(getTime1+"/"+getTime2);
  
}

function start(){
    
    document.getElementById("btn_startTime").disabled=true;
    judgeTime();
    appPost();
}

function end(){
    btnBook.className="btn_book-unactive";
    btnBook.disabled=true;
    document.getElementById("btn_startTime").disabled=false;
}

function appPost() {
  //alert("clickxxx");
   //设置口罩数目
   alert("开始预约");
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
   
  $.post("http://118.178.184.69:8886/addLottery",
           {"start_time":
           startTime,
           "end_time":
           endTime,
           "mask_number":
           num
          },function(data){
    		 //alert(data.id);
       },"json")
      
}



function Post_init(){
    //设置口罩数目
    alert("开始预约");
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
    alert("success");
    }
  }
        xmlhttp.open("POST","118.178.184.69:8886/addLottery",true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded"); 
        xmlhttp.send(str);
}
