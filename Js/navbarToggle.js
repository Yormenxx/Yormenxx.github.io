const $btnResponsive = document.getElementById("btn_responsive"),

    $listNavBar = document.getElementById("list__navbar");


$btnResponsive.addEventListener("click",()=>{

    $listNavBar.classList.toggle("toggle-activate");

})