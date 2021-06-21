// nút quay về trang chủ

var homeBtnIcon = document.getElementById('home-icon');

homeBtnIcon.addEventListener('click',homeReturnIcon);

function homeReturnIcon(){
    window.location.href="./index.html";
}

var homeBtnLogo = document.getElementById('home-ins');

homeBtnLogo.addEventListener('click',homeReturnLogo);

function homeReturnLogo(){
    window.location.href="./personal.html";
}
