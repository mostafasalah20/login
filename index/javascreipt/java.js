

let title = document.getElementById("title");
let user_name = document.getElementById("username");
let Email = document.getElementById("Email");
let password = document.getElementById("password");
let sign_up = document.getElementById("sign_up");
let sign_in = document.getElementById("sign_in");
let NameValid = document.getElementById("NameValid");
let EmailValid = document.getElementById("EmailValid");
let passValid = document.getElementById("passValid");
let userData = [];
load();
sign_up.addEventListener("click", function () {

    if (isExist() === true) {
        Swal.fire({
            position: "center-center",
            icon: "error",
            title: "Email already exist",
            showConfirmButton: true,
            timer: 1500,
        })
    } else {
        Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Email successfully",
            showConfirmButton: false,
            timer: 1500
        });
       
        if (validName() == true && validEmail() == true && validPass() == true) {
            let singData = {
                name: user_name.value,
                Email: Email.value,
                password: password.value,
            }

            userData.push(singData)
            save();
            setTimeout(function () {
                window.location.href = "sign in/lodin.html";
            }, 3000);
            clear()
        } else {
            Swal.fire({
                title: "Invalid Data ?",
                text: `${validName() == false ? "Please Enter user Name" : ""} ${validEmail() == false ? "Please Enter Email" : ""} ${validPass() == false ? "Please Enter password" : ""}`,
                icon: "error"
            });
        }
    }

})


function save() {
    localStorage.setItem("Data", JSON.stringify(userData))
}
function load() {
    if (localStorage.getItem("Data") !== null) {
        userData = JSON.parse(localStorage.getItem("Data"));
    }
}

function clear() {
    user_name.value = "";
    Email.value = "";
    password.value = "";
}

function validName() {
    let patern = /^[\w'\-,.][^0-9_!¡?÷?¿\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/gm;
    if (patern.test(user_name.value)) {
        NameValid.classList.replace("d-block", "d-none")
        return true;
    } else {
        NameValid.classList.replace("d-none", "d-block")
        return false;
    }
}

function validEmail() {
    parent = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (parent.test(Email.value)) {
        EmailValid.classList.replace("d-block", "d-none")
        return true;
    } else {
        EmailValid.classList.replace("d-none", "d-block")
        return false;
    }
}

function validPass() {
    parent = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (parent.test(password.value)) {
        passValid.classList.replace("d-block", "d-none")
        return true;
    } else {
        passValid.classList.replace("d-none", "d-block")
        return false;
    }
}

function isExist() {
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].Email.toUpperCase() === Email.value.toUpperCase()) {
            return true;
        }
    }
}



