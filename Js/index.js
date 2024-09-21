//PROGRESS BAR
window.addEventListener("load",()=>{

    const progress = document.getElementById("progress")
    requestAnimationFrame(update)
})

function update (){
    progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight)*100)}%`
    requestAnimationFrame(update)
}

//Slider

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

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



let $cont1 = document.getElementById("cont1"),
    $cont2 = document.getElementById("cont2"),
    $cont3 = document.getElementById("cont3")

let cant1 = 0,cant2 = 0,cant3 = 0,cant4 = 0
let time = 25

let tiempo1 = setInterval(() => {

    $cont1.textContent = cant1+=1

    if(cant1 === 60)

        {
            clearInterval(tiempo1)
        }
    
}, 100);


let tiempo2 = setInterval(() => {

    $cont2.textContent = cant2+=1

    if(cant2 === 100)

        {
            clearInterval(tiempo2)
        }
    
}, 50);



let tiempo3 = setInterval(() => {

    $cont3.textContent = cant3+=1

    if(cant3 === 6)

        {
            clearInterval(tiempo3)
        }
    
}, 200);

//PROJECT FILTER

(function(){

   
    
    const $itemList = document.querySelectorAll(".list-category");
    const $itemProject = document.querySelectorAll(".item-project");
    
    $itemList.forEach((button)=>{
        button.addEventListener("click",(e)=>{
            e.preventDefault()

            const filter = e.target.dataset.filter

            $itemProject.forEach((item)=>{

                if(filter == "TODOS"){
                    item.style.display = "flex"
                } else{

                    if(item.classList.contains(filter)){
                        item.style.display = "flex"

                    }else{
                        item.style.display = "none"
                    }
                }
            })
        })
    })
    




})();   



