export function initProjectFilter() {
    const $itemList = document.querySelectorAll(".list-category");
    const $itemProject = document.querySelectorAll(".item-project");
  
    $itemList.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = e.target.dataset.filter;
  
        $itemProject.forEach((item) => {
          if (filter === "TODOS") {
            item.style.display = "flex";
          } else {
            item.style.display = item.classList.contains(filter) ? "flex" : "none";
          }
        });
      });
    });
  }