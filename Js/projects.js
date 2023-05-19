//FUNCTION ALLOWS  FILTER SKILLS


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