export function initChevronUp() {
    const $chevron = document.getElementById("chevron-up");
  
    $chevron.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  
    window.onscroll = () => {
      if (window.scrollY < 300) {
        $chevron.classList.remove("chevron-up-container-on");
      } else {
        $chevron.classList.add("chevron-up-container-on");
      }
    };
  }