export function initCounters() {
  const $cont1 = document.getElementById("cont1");
  const $cont2 = document.getElementById("cont2");
  const $cont3 = document.getElementById("cont3");

  let cant1 = 0, cant2 = 0, cant3 = 0;

  const createCounter = (element, limit, interval, initialValue) => {
    let count = initialValue;
    let intervalId = setInterval(() => {  
      element.textContent = count += 1;
      if (count > limit) {
        clearInterval(intervalId); 
      }
    }, interval);
    return intervalId; 
  };

  createCounter($cont1, 9, 100, cant1);
  createCounter($cont2, 99, 50, cant2);
  createCounter($cont3, 5, 200, cant3);
}