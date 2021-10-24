//用于判断格式的js

function LoginChecked(){
    var login_div = document.getElementById("login");
    var register_div = document.getElementById("register");
    var userAccount = document.forms["login_form"]["userName"].value;
    var uspw = document.forms["login_form"]["userPassword"].value;
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
    var userAccount = document.forms["register_form"]["userName"].value;
    var uspw = document.forms["register_form"]["userPassword"].value;
    var cpsw = document.forms["register_form"]["ConfirmPassword"].value;
    var VeficCode = document.forms["register_form"]["VerificationCode"].value;
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
    if( VeficCode === "" ){
        alert("请输入验证码");
        return false;
    }
}
function onMouseOver(){
    loginsw.style.cursor = 'pointer';
    signsw.style.cursor = 'pointer';
}
function changePage(val){
    var login_div = document.getElementById("login");
    var register_div = document.getElementById("register");
    var avr_div = document.getElementById("avr");
    var lg_font = document.getElementById("lg");
    var sg_font = document.getElementById("sg");
    if(val === 'login'){
        //切换界面原理
        login_div.style.display = 'block';
        register_div.style.display = 'none';
        avr_div.style.display = 'block';
        lg_font.style.color = "#649cf0"
        sg_font.style.color = "#000000"

    }else if(val === 'register'){
        // 同上
        login_div.style.display = 'none';
        register_div.style.display = 'block';
        avr_div.style.display = 'none';
        lg_font.style.color = "#000000"
        sg_font.style.color = "#649cf0"
    }
}
