function submit1() {
    var list={
        User:document.getElementById("num").value
    };
    $.ajax({
      type: "GET",
      url: "http://118.178.184.69:8886/select/userId",
      data: { id:document.getElementById("num").value},
      dataType: "JSON",
      success: function(result) {
            if(result != '')
            {
                var id=result[0].id;
                var name=result[0].name;               
                var phone=result[0].phone;
                var count=result[0].mask_number;
                
                //alert(name);

                sessionStorage.setItem('id', id);
                sessionStorage.setItem('name', name);
                sessionStorage.setItem('phone', phone);
                sessionStorage.setItem('count', count);

                window.location.href="get.html";
                
            }
            else
            {
                window.location.href="noget.html";
            }
      },
      error:function(){
          alert("fail");         
      }
    });
  }

