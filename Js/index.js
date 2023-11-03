//PRELOADER


const loader = document.getElementById("preloader") 

window.addEventListener("load",()=>{
    setTimeout(function(){
        loader.style.display="none"
    }, );
})


// const cursorDot = document.getElementById("cursor-dot")
// const cursorOutline = document.getElementById("cursor-outline")


// window.addEventListener("mousemove", function(e){

//     const posX = e.clientX
//     const posY = e.clientY

//     cursorDot.style.left= `${posX}px`
//     cursorDot.style.top= `${posY}px`

//     cursorOutline.style.left=`${posX}px`
//     cursorOutline.style.top=`${posY}px`


//     cursorOutline.animate({
//         left: `${posX}px`,
//         top: `${posY}px`
//     },{duration: 500, fill:"forwards"})
// })


// NAVBAR CHANGE COLOR

// function changeBgColorNavBar(){

//     var $navbar = document.getElementById("navbar");


//     var scrollValue = window.scrollY;

//     if(scrollValue <90){
//         $navbar.classList.remove("bgNavabarChange")


//     }else{
//         $navbar.classList.add("bgNavabarChange")
 
//     }
// };

// window.addEventListener("scroll",changeBgColorNavBar);

//NAVBAR TOGGLE

// const $btnResponsive = document.getElementById("btn_responsive"),

// $listNavBar = document.getElementById("list__navbar");

// $btnResponsive.addEventListener("click",()=>{

// $listNavBar.classList.toggle("toggle-activate");

// })


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

// const $checkbox = document.getElementById("checkbox")
// const $body = document.querySelector("body")


//     $checkbox.addEventListener("change", () => {
//         $body.classList.toggle("whiteMode")
//         store($body.classList.contains("whiteMode"))
// })


//     function load(){
//         const whiteMode = localStorage.getItem("whiteMode")

//         if(!whiteMode){
//             store("false")
//         }else if (whiteMode =="true"){
//             $body.classList.add("whiteMode")
//         }
//     }

//     function store(value){
//         localStorage.setItem("whiteMode",value)
//     }





// ScrollReveal().reveal('.others-item', {
//     delay: 105,
//     duration: 400,
//     reset: true
// });  


// ScrollReveal().reveal('.container__information', {
//     delay: 105,
//     duration: 400,
//     reset: true
// });  


// ScrollReveal().reveal('.img-main', {
//     delay: 105,
//     duration: 400,
//     reset: true
// });  

// ScrollReveal().reveal('.items-container,.container-img-about,.container-about, .container-fast-items', {
//     delay: 105,
//     duration: 400,
//     reset: true
// });  




// ScrollReveal().reveal('.cnt-inputs,.button-contact, footer ', {
//     delay: 205,
//     duration: 500,
//     reset: true
// }); 

console.log('%c--------------------', 'color: yellow; font-size: 40px ; text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue');

console.log('%cHELLO WORLD CODERS', 'color: yellow; font-size: 50px');

console.log('%c--------------------', 'color: yellow; font-size: 40px ; text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue');
console.log('%cWelcome to my portfolio', 'color: yellow; font-size: 20px');

console.log('%cGithub link : https://github.com/Yormenxx ', 'color: yellow; font-size: 15px' );





/*

const titlePlayer = document.getElementById("playerTitle")
const prevPlayer = document.getElementById("prev")
const playPlayer = document.getElementById("play")
const nextPlayer = document.getElementById("next")



let isPlayingSong = false;

const audio = document.getElementById("audio")
// let trackIndex = 0;

const songList = [
    {
        path:"Crown_The_Empire_whatIam.mp3",
        songName:"What I am"
    },

    {
        path: "Ghostemane_Gatteka.mp3",
        songName:"Gatteka"
    },


    {
        path: "Megadeth_Dystopia.mp3",
        songName:"Dystopia"
    },


    {
        path: "Megadeth_Conquer_Or_Die.mp3",
        songName:"Conquer or Die"
    }
]

// function loadTrack (){{
//     currentAudio.src = songList[trackIndex].path
//     currentAudio.load()
//     titlePlayer.textContent= songList.songName
// }}




function playSong(){

    audio.play();
    isPlayingSong = true;

}

function pauseSong(){

    audio.pause();
    isPlayingSong = false;

}

let i = 0;


playPlayer.addEventListener("click",()=>(isPlayingSong ? pauseSong(): playSong()))

function songLoad (songList){
    titlePlayer.textContent = songList.songName
    audio.src = songList[i].path
}



songLoad([i])

*/


const $ocultarItem = document.getElementById("ocultar-item")
const $btnMore = document.getElementById("btn__more")

$btnMore.addEventListener("click", ()=>{

    $ocultarItem.classList.add("Mostrar-Item")

    if($ocultarItem.classList.contains("Mostrar-Item")){

        $btnMore.style="display:none"
    
    }
    
})





