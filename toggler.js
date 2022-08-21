const togglerEl = document.querySelector(".toggler");
const plansEl = document.querySelector(".plans")

let isPaymentMonthly = true;

window.addEventListener("load", () => {
  if(isPaymentMonthly) {
    togglerEl.classList.add("monthly")
    plansEl.classList.add("monthly")
  } else {
    togglerEl.classList.add("annually")
    plansEl.classList.add("annually")
  }
})

function updatePrices() {
  console.log("updatePrices");
}

togglerEl.addEventListener("click", () => {
  if (togglerEl.classList.contains("monthly")) {
    togglerEl.classList.replace("monthly", "annually");
    plansEl.classList.replace("monthly", "annually")
    isPaymentMonthly = false;
  } else if (togglerEl.classList.contains("annually")) {
    togglerEl.classList.replace("annually", "monthly");
    plansEl.classList.replace("annually", "monthly")
    isPaymentMonthly = true;
  }

  updatePrices();
});
