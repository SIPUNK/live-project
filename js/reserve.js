function Check() {
    if(!CheckName())
    {
        alert("输入的名字格式错误");
    }
    if (!CheckIDCard()) {
        alert("输入的身份证号码错误");
    }
    if (!CheckSinglePhone()) {
        alert("输入的手机号码错误");
    }
    if (!CheckCount()) {
        alert("输入的口罩数量不符合规定");
    }
}
function CheckSinglePhone() {
    Phone = document.getElementById("Phone").value;
    var reg = /^((13[0-9]{9})|(159[0-9]{8}))$/;
    return reg.test(Phone);
}
function CheckIDCard() {
    id = document.getElementById("Id").value;
    var idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        iFlag = idCardReg.test(id);
    if (!iFlag) {
        return false;
    }
    else
    {
        return true;
    }
}
function CheckCount() {
    var x;
    // 获取 id="numb" 的值
    x = document.getElementById("Count").value;
    // 如果输入的值 x 不是数字或者小于 1 或者大于 10，则提示错误 Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 3) {
        return false;
    }
    else
    {
        return true;
    }
}
function CheckName(){
	var val = document.getElementById('Name').value;
	var reg =/^([\u4e00-\u9fa5]+|([a-zA-Z]+\s?)+)$/g;
    if(reg.test(val))
    {
		return true;
    }
    else
    {
		return false;
	}
}