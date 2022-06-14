let mowLawnState = false;

let servicesRequested = [];
let costOfService = [];
let serviceAmtSection = document.getElementById("service-amt-section");

// DOM VARIABLES

const washCarBtn = document.getElementById("wash-car-btn");
const mowLawnBtn = document.getElementById("mow-lawn-btn");
const pullWeedsBtn = document.getElementById("pull-weeds-btn");
let serviceTotal = document.getElementById("service-total");

// EVENT LISTENERS

washCarBtn.addEventListener("click", function () {
  servicesRequested.push("Wash Car");
  costOfService.push(10);

  costOfService.reduce(function (prev, curr) {
    total = prev + curr;
    serviceTotal.textContent = "$" + total;
    console.log(total);
    return total;
  }, 0);

  render();
});

mowLawnBtn.addEventListener("click", function () {
  servicesRequested.push("Mow Lawn");
  costOfService.push(20);

  costOfService.reduce(function (prev, curr) {
    total = prev + curr;
    serviceTotal.textContent = "$" + total;
    console.log(total);
    return total;
  }, 0);

  render();
});

pullWeedsBtn.addEventListener("click", function () {
  servicesRequested.push("Pull Weeds");
  costOfService.push(30);

  costOfService.reduce(function (prev, curr) {
    total = prev + curr;
    serviceTotal.textContent = "$" + total;
    console.log(total);
    return total;
  }, 0);

  render();
});

// FUNCTIONS
function render() {
  serviceAmtSection.innerHTML = "";
  for (let i = 0; i < servicesRequested.length; i++) {
    serviceAmtSection.innerHTML += `
    <div class="service-amount">
                <li>${servicesRequested[i]}</li>
                <p>$${costOfService[i]}</p>
              </div>
    
    `;
    for (let i = 0; i < costOfService.length; i++) {
      // console.log(costOfService[i]);
    }
  }
  // console.log(servicesRequested);
  // console.log(costOfService);
}

costOfService.reduce(function (prev, curr) {
  total = prev + curr;
  console.log(total);
  return total;
}, 0);
