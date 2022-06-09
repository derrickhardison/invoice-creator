// VARIABLES

let servicesRequested = [];

let serviceAmtSection = document.getElementById("service-amt-section");

// DOM VARIABLES
const washCarBtn = document.getElementById("wash-car-btn");
const mowLawnBtn = document.getElementById("mow-lawn-btn");
const pullWeedsBtn = document.getElementById("pull-weeds-btn");

// EVENT LISTENERS
washCarBtn.addEventListener("click", function () {
  console.log("wash car btn");

  // add wash car task and amount to invoice
});
mowLawnBtn.addEventListener("click", function () {
  console.log("mow lawn btn");
  servicesRequested.push({
    service: "Mow Lawn",
    amount: 20,
  });

  render();
});
pullWeedsBtn.addEventListener("click", function () {
  console.log("pull weeds btn");
});

function render() {
  for (let i = 0; i < servicesRequested.length; i++) {
    serviceAmtSection.innerHTML += `
    <div class="service-amount">
                <li>${servicesRequested[i].service}</li>
                <p>$${servicesRequested[i].amount}</p>
              </div>
    
    `;
  }
}
