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




// const charactersList = document.getElementById('charactersList');
// const searchBar = document.getElementById('searchBar');
// let hpCharacters = [];

// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value.toLowerCase();

//     const filteredCharacters = hpCharacters.filter((character) => {
//         return (
//             character.name.toLowerCase().includes(searchString) ||
//             character.house.toLowerCase().includes(searchString)
//         );
//     });
//     displayCharacters(filteredCharacters);
// });

// const loadCharacters = async () => {
//     try {
//         const res = await fetch('https://hp-api.herokuapp.com/api/characters');
//         hpCharacters = await res.json();
//         displayCharacters(hpCharacters);
//     } catch (err) {
//         console.error(err);
//     }
// };

// const displayCharacters = (characters) => {
//     const htmlString = characters
//         .map((character) => {
//             return `
//             <li class="character">
//                 <h2>${character.name}</h2>
//                 <p>House: ${character.house}</p>
//                 <img src="${character.image}"></img>
//             </li>
//         `;
//         })
//         .join('');
//     charactersList.innerHTML = htmlString;
// };

// loadCharacters();
