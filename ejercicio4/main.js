// 1.1 Añade un botón a tu html con el id btnClick y en su javascript añade el eevento click que ejecute un console log con la información del evento del clcick.
const miBtn = document.getElementById("btnClick");
miBtn.addEventListener("click", (ev) => {
  console.log(ev);
});
// 1.2 Añade un evento "focus" que ejecute un console.log con el valor del input.
const btnFocus = document.querySelector(".focus")
btnFocus.addEventListener("focus",() => {
  console.log(btnFocus.value)
} )
// 1.3 Añade un evento input que ejecute un console.log con el valor del input
const btnValue = document.querySelector(".value")
btnValue.addEventListener("input", ()=> console.log(btnValue.value))
