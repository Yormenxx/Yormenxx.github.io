import { initProgressBar } from './progress-bar.js';
import { initSlider } from './slider.js';
import { initChevronUp } from './chevron-up.js';
import { initCounters } from './counter.js';
import { initSearchFilter } from './search-filter.js';
import { initProjectFilter } from './project-filter.js';
import { copyToClipboard } from './clipboard.js';


document.addEventListener("DOMContentLoaded", () => { 
  initProgressBar();
  initSlider();
  initChevronUp();
  initCounters();
  initSearchFilter();
  initProjectFilter();

  const alertContext = document.querySelector(".alert-message");
  const $adress = document.getElementById("adress").textContent;
  const copyButton = document.getElementById("copyButton"); 

  copyButton.addEventListener("click", () => {  
    copyToClipboard(alertContext, $adress); 
  });

});



//PROGRESS BAR
// window.addEventListener("load",()=>{

//     const progress = document.getElementById("progress")
//     requestAnimationFrame(update)
// })

// function update (){
//     progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight)*100)}%`
//     requestAnimationFrame(update)
// }

//Slider

// var copy = document.querySelector(".logos-slide").cloneNode(true);
// document.querySelector(".logos").appendChild(copy);

//CHEVRON UP

// const $chevron = document.getElementById("chevron-up")

// $chevron.addEventListener("click", ()=>{
//     window.scrollTo({
//         top:0,
//         behavior:"smooth"
//     })
    
// });

// window.onscroll = () =>{

//     if (window.scrollY < 300){

//         $chevron.classList.remove("chevron-up-container-on")

//     }else{
//         $chevron.classList.add("chevron-up-container-on")
//     }

// }



// let $cont1 = document.getElementById("cont1"),
//     $cont2 = document.getElementById("cont2"),
//     $cont3 = document.getElementById("cont3")

// let cant1 = 0,cant2 = 0,cant3 = 0,cant4 = 0
// let time = 25

// let tiempo1 = setInterval(() => {

//     $cont1.textContent = cant1+=1

//     if(cant1 === 10)

//         {
//             clearInterval(tiempo1)
//         }
    
// }, 100);


// let tiempo2 = setInterval(() => {

//     $cont2.textContent = cant2+=1

//     if(cant2 === 100)

//         {
//             clearInterval(tiempo2)
//         }
    
// }, 50);



// let tiempo3 = setInterval(() => {

//     $cont3.textContent = cant3+=1

//     if(cant3 === 6)

//         {
//             clearInterval(tiempo3)
//         }
    
// }, 200);



// document.getElementById('filterInput').addEventListener('input', function () {
//     const filterValue = this.value.toLowerCase();
//     const cards = document.querySelectorAll('.card');
  
//     cards.forEach(card => {
//       const titleElement = card.querySelector('h4'); 
  
      
//       if (titleElement && titleElement.textContent) {
//         const title = titleElement.textContent.toLowerCase();
  
       
//         if (title.includes(filterValue)) {
//           card.style.display = ''; 
//         } else {
//           card.style.display = 'none'; 
//         }
//       } else {
//         console.error('El elemento <h2> no se encontró o no tiene texto');
//       }
//     });
//   });

//PROJECT FILTER

// (function(){

   
    
//     const $itemList = document.querySelectorAll(".list-category");
//     const $itemProject = document.querySelectorAll(".item-project");
    
//     $itemList.forEach((button)=>{
//         button.addEventListener("click",(e)=>{
//             e.preventDefault()

//             const filter = e.target.dataset.filter

//             $itemProject.forEach((item)=>{

//                 if(filter == "TODOS"){
//                     item.style.display = "flex"
//                 } else{

//                     if(item.classList.contains(filter)){
//                         item.style.display = "flex"

//                     }else{
//                         item.style.display = "none"
//                     }
//                 }
//             })
//         })
//     })
    




// })();   



// const alertContext = document.querySelector(".alert-message")


// const notification = text =>{
//     alertContext.textContent=text;
//     alertContext.classList.add("active");
//     setTimeout(()=>{
//         alertContext.classList.remove("active");
//     },2000)
   
// }

// const $adress = document.getElementById("adress").textContent

// async function copyToClipboard() {
    
//     try{
//         await navigator.clipboard.writeText($adress);
//          notification("Se ha copiado al portapapeles")
//     }catch(error){
//         console.error('Error al copiar: ', error);

//     }
// }




