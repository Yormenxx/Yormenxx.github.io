//PROGRESS BAR
window.addEventListener("load",()=>{

    const progress = document.getElementById("progress")
    requestAnimationFrame(update)
})

function update (){
    progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight)*100)}%`
    requestAnimationFrame(update)
}


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



