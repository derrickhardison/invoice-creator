let mowLawnState = false;

let servicesRequested = [];
let costOfService = [];
let serviceAmtSection = document.getElementById("service-amt-section");

// DOM VARIABLES

const washCarBtn = document.getElementById("wash-car-btn");
const mowLawnBtn = document.getElementById("mow-lawn-btn");
const pullWeedsBtn = document.getElementById("pull-weeds-btn");

// EVENT LISTENERS

washCarBtn.addEventListener("click", function () {
  for (let i = 0; i < servicesRequested.length; i++) {
    if (servicesRequested[i].service === "Wash Car") {
      console.log("already there");
    } else {
      servicesRequested += [
        {
          service: "Wash Car",
          amount: 10,
        },
      ];
    }
  }
});

mowLawnBtn.addEventListener("click", function () {
  if (servicesRequested.includes("Mow Lawn")) {
    console.log("already there");
  } else {
    servicesRequested.push("Mow Lawn");
    costOfService.push(20);

    render();
  }
});

pullWeedsBtn.addEventListener("click", function () {
  if (servicesRequested.includes("Pull Weeds")) {
    console.log("already there");
  } else {
    servicesRequested.push("Pull Weeds");
    costOfService.push(30);

    render();
  }
});

// FUNCTIONS
function render() {
  for (let i = 0; i < servicesRequested.length; i++) {
    serviceAmtSection.innerHTML += `
    <div class="service-amount">
                <li>${servicesRequested[i]}</li>
                <p>$${costOfService[i]}</p>
              </div>
    
    `;
    for (let i = 0; i < costOfService.length; i++) {
      console.log(costOfService[i]);
    }
  }
  console.log(servicesRequested);
  console.log(costOfService);
}

function renderService(service) {}
