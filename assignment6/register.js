window.onload = pageLoad;

function pageLoad() {
    var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {
    var firstname = document.forms["myRegister"]["firstname"].value;
    var lastname = document.forms["myRegister"]["lastname"].value;
    var gender = document.forms["myRegister"]["gender"].value;
    var bday = document.forms["myRegister"]["bday"].value;
    var email = document.forms["myRegister"]["email"].value;
    var username = document.forms["myRegister"]["username"].value;
    var password = document.forms["myRegister"]["password"][0].value;
    var retypePassword = document.forms["myRegister"]["password"][1].value;  


    if (firstname == "" || lastname == "" || gender == "" || bday == "" || email == "" || username == "" || password == "" || retypePassword == "") {
        document.getElementById("errormsg").innerText = "ใส่ให้ครบ*.";
        return false;
    }

    if (password !== retypePassword) {
        document.getElementById("errormsg").innerText = "Passwords ไม่ตรงกัน.";
        return false;
    }

    return true;
}
