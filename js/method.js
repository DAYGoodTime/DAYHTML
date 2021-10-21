//用于判断格式的js

function LoginChecked(){
    var userAccount = document.forms["login"]["userAccount"].value;
    var uspw = document.forms["login"]["UserPassword"].value;
    if (userAccount == null || userAccount === ""){
        alert("请输入用户名");
        return false;
    }
    if (uspw == null || uspw === ""){
        alert("请输入密码")
    }
    return false;
}
function SignChecked() {
    var userAccount = document.forms["sign"]["userAccount"].value;
    var uspw = document.forms["sign"]["UserPassword"].value;
    var cpsw = document.forms["sign"]["ConfirmPassword"].value;
    var phoneNumber = document.forms["sign"]["PhoneNumber"].value;
    var VeficCode = document.forms["sign"]["VerificationCode"].value;
    if(userAccount === ""){
        alert("请输入用户名");
        return false;
    }
    if(uspw === ""){
        alert("请输入密码");
        return false;
    }
    if(uspw !== cpsw){
        alert("输入密码与确认密码不相同");
        return false;
    }
    if( phoneNumber === ""){
        alert("请输入电话号码");
        return false;
    }
    if( VeficCode === "" ){
        alert("请输入验证码");
        return false;
    }
}
