
// nav bar configurations

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


//chevron up code

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

//Hoja de vida

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});




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


(function(){

    const $itemList = document.querySelectorAll(".list-category");
    const $itemProject = document.querySelectorAll(".item-project");
    
    $itemList.forEach((button)=>{
        button.addEventListener("click",(e)=>{
            e.preventDefault()

            const filter = e.target.dataset.filter

            $itemProject.forEach((item)=>{

                if(filter === "TODOS"){
                    item.style.display = "flex"
                } else{

                    if(item.classList.contains(filter)){
                        item.style.display = "flex"

                    } else{
                        item.style.display = "none"
                    }
                }
            })
        })
    })
    




})();   



