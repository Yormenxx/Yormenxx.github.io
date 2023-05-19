//PRELOADER


const loader = document.getElementById("preloader") 

window.addEventListener("load",()=>{
    setTimeout(function(){
        loader.style.display="none"
    }, );
})




// NAVBAR CHANGE COLOR

function changeBgColorNavBar(){

    var $navbar = document.getElementById("navbar");


    var scrollValue = window.scrollY;

    if(scrollValue <90){
        $navbar.classList.remove("bgNavabarChange")


    }else{
        $navbar.classList.add("bgNavabarChange")
 
    }
};

window.addEventListener("scroll",changeBgColorNavBar);

//NAVBAR TOGGLE

const $btnResponsive = document.getElementById("btn_responsive"),

$listNavBar = document.getElementById("list__navbar");

$btnResponsive.addEventListener("click",()=>{

$listNavBar.classList.toggle("toggle-activate");

})


//CHEVRON UP

const $chevron = document.getElementById("chevron-up")

$chevron.addEventListener("click", ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
    
});

window.onscroll = () =>{

    if (window.scrollY < 300){

        $chevron.classList.remove("chevron-up-container-on")

    }else{
        $chevron.classList.add("chevron-up-container-on")
    }

}

//PROGRESS BAR


window.addEventListener("load",()=>{

    const progress = document.getElementById("progress")
    requestAnimationFrame(update)
})

function update (){
    progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight)*100)}%`
    requestAnimationFrame(update)
}






// const $itemList = document.querySelectorAll(".list-category");
// const $itemProject = document.querySelectorAll(".item-project");



// for(let i = 0 ; i < $itemList.length; i++){

//     $itemList[i].addEventListener("click",function(){

//         for(let j = 0; j < $itemList.length; j++){

//             $itemList[j].classList.remove(".listActivado")

//         }
//         this.classList.add(".listActivado")


//         let dataFilter = this.getAttribute("data-filter")


//         for(let k = 0; k < $itemProject.length; k++){

//             $itemProject[k].classList.remove(".listActivado")

//             $itemProject[k].classList.add(".ocultarProject")

//             if($itemProject[k].getAttribute("data-category")== dataFilter || dataFilter == "TODOS"){

//                 $itemProject[k].classList.remove(".ocultarProject")

//                 $itemProject[k].classList.add(".listActivado")

//             }

//         }



//     })
// }
