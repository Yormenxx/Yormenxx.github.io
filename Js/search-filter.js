export function initSearchFilter() {
    document.getElementById('filterInput').addEventListener('input', function () {
      const filterValue = this.value.toLowerCase();
      const cards = document.querySelectorAll('.card');
  
      cards.forEach(card => {
        const titleElement = card.querySelector('h4');
        if (titleElement && titleElement.textContent) {
          const title = titleElement.textContent.toLowerCase();
          if (title.includes(filterValue)) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  }