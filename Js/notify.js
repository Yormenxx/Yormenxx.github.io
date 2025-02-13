export function showNotification(alertElement, text) { 
  alertElement.textContent = text;
  alertElement.classList.add("active");
  setTimeout(() => {
    alertElement.classList.remove("active");
  }, 2000);
}