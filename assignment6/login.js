window.onload = loginLoad;

function loginLoad() {
    var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;

    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);

    window.registeredUsername = urlParams.get('username');
    window.registeredPassword = urlParams.get('password');
}

function checkLogin() {
    var username = document.forms["myLogin"]["username"].value;
    var password = document.forms["myLogin"]["password"].value;


    if (username === window.registeredUsername && password === window.registeredPassword) {
        alert("Login สำเร็จ");
    } else {
        alert("Login ไม่สำเร็จ");
     
    }
}
