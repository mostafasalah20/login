

let namePage = document.getElementById('namePage');
let navbar_cont = document.getElementById('navbar_cont');
let icons = document.getElementById('icons');



// load(userData);

let userData = []
async function GetData() {
    let response = await fetch('https://fakestoreapi.com/products?sort=desc');
    let data = await response.json();
    display(data);
}
GetData();


let catona = ``;
function display(data) {
    for (let i = 0; i < data.length; i++) {
        catona += `
        
        <div class="col-sm-12 col-md-3 mb-4">
                <div class="card">
                    <img id="testImage" onclick=""  src="${data[i].image}" class="testImage img w-100" alt="">
                    <div class="card-body">
                        <h5 class="card-title text-center">${data[i].title}</h5>
                        <p class="description card-text text-center">${data[i].description}</p>
                        <div class="h5 border-top border-bottom d-flex justify-content-between">
                            <h5 class="h5 ">id : ${i}</h5>
                            <div class="stars ">
                                <i class="fa-regular fa-star-half-stroke fa-flip-horizontal text-warning"></i>
                                <i class="fa-solid fa-star text-warning"></i>
                                <i class="fa-solid fa-star text-warning"></i>
                                <i class="fa-solid fa-star text-warning"></i>
                            </div>


                        </div>

                        <div class="catog d-flex justify-content-between ">
                            <h6> category : ${data[i].category}</h6>
                            <h6>price : ${data[i].price}</h6>
                        </div>
                    </div>

                </div>
            </div>
        `
    }
    document.getElementById('row').innerHTML = catona;

}

window.addEventListener('load', function () {
    // namePage.innerHTML =this.localStorage.getItem(userData.name);
    localStorage.getItem('Data')
    userData = JSON.parse(localStorage.getItem('Data'))
    for (let i = 0; i < userData.length; i++) {
        namePage.innerHTML = `welcome :${userData[i].name} `;

    }

})


window.onscroll = function () {
    console.log(window.scrollY);
    if (window.scrollY > 40) {
        navbar_cont.classList.remove('navbar-cont');
        navbar_cont.classList.add('navbar-scroll');
    } 
    else {
        navbar_cont.classList.remove('navbar-scroll');
        navbar_cont.classList.add('navbar-cont');
    }

    if(window.scrollY > 500){
                icons.classList.remove('icons');
                icons.classList.add('icon_scroll');
            }
            else{
                icons.classList.remove('icon_scroll');
                icons.classList.add('icons');
            }
}



icons.addEventListener('click',function(){
    window.scrollTo({top: 0, behavior:'smooth' });
})