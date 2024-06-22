

let title = document.getElementById("title");
let user_name = document.getElementById("username");
let Email = document.getElementById("Email");
let password = document.getElementById("password");
let sign_in = document.getElementById("sign_in");
let EmailValid = document.getElementById("EmailValid");
let passValid = document.getElementById("passValid");
let userData = [];
load();
sign_in.addEventListener("click", function () {
    if (isExistEmail() === true && isExistpass()===true) {
        Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Your email has been entered successfully",
            showConfirmButton: false,
            timer: 1500
          });

        let singData = {
            Email: Email.value,
            password: password.value,
        }
        userData.push(singData)
        setTimeout(function(){
            window.location.href = "../web/home.html";
        },2000)
        
    } else {
        Swal.fire({
            position: "center-center",
            icon: "error",
            title: "in correct Email or password",
            showConfirmButton: false,
            timer: 1500
          });
    }

})



function load() {
    if (localStorage.getItem("Data") !== null) {
        userData = JSON.parse(localStorage.getItem("Data"));
    }
}

// function clear() {
//     user_name.value = "";
//     Email.value = "";
//     password.value = "";
// }





function isExistEmail() {
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].Email.toUpperCase() === Email.value.toUpperCase()) {
            return true;
        }
    }
}

function isExistpass() {
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].password === password.value) {
            return true;
        }
    }
}



