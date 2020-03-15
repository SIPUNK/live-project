var param;
function Check() {
    var Id = document.getElementById("id").value;
    var Phone = document.getElementById("phone").value;
    var Name = document.getElementById("name").value;
    var Mask_number = document.getElementById("mask_number").value;
    if(!CheckName())
    {
        alert("输入的名字格式错误");
        return;
    }
    if (!CheckIDCard()) {
        alert("输入的身份证号码错误");
        return;
    }
    if (!CheckSinglePhone()) {
        alert("输入的手机号码错误");
        return;
    }
    if (!CheckCount()) {
        alert("输入的口罩数量不符合规定");
        return;
    }
    var str = "?id=" + Id + "&phone=" + Phone + "&name=" + Name + "&mask_number=" + Mask_number + "&lottery_id=" + param;
    $.ajax({
        type: "get",
        dataType: "text",
        url: "http://118.178.184.69:8886/addUser" + str,
        statusCode: {
            200: function (data) {
                if (data == 0) {
                    alert("预约失败");
                }
                else {
                    alert("您的编号为：" + data);
                }
            }
        },
        error: function () {
            alert("fail");
        }
    });
}
function CheckSinglePhone() {
    Phone = document.getElementById("phone").value;
    var reg = /^((13[0-9]{9})|(159[0-9]{8}))$/;
    return reg.test(Phone);
}
function CheckIDCard() {
    id = document.getElementById("id").value;
    var idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        iFlag = idCardReg.test(id);
    if (!iFlag) {
        return false;
    }
    else {
        return true;
    }
}
function CheckCount() {
    var x;
    // 获取 id="numb" 的值
    x = document.getElementById("mask_number").value;
    // 如果输入的值 x 不是数字或者小于 1 或者大于 10，则提示错误 Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 3) {
        return false;
    }
    else {
        return true;
    }
}
function CheckName() {
    var val = document.getElementById('name').value;
    var reg = /^([\u4e00-\u9fa5]+|([a-zA-Z]+\s?)+)$/g;
    if (reg.test(val)) {
        return true;
    }
    else {
        return false;
    }
}
function InitLottery() {
    $.ajax({
        url: 'http://118.178.184.69:8886/select/lottery',
        type: 'get',
        async: true,
        dataType: 'json',
        statusCode: {
            200: function (data) {
                var json = eval(data);
                $.each(json, function (index) {
                    var Id = json[index].id;
                    param = Id;
                });
            }
        },
        error: function () {
            alert("fail");
        }
    });
}