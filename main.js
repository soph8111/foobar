import "./style.scss";

window.addEventListener("DOMContentLoaded", start);

// let beertypesUrl = "https://the-three-must-get-beers.herokuapp.com/beertypes";

function start() {
  console.log("start");
  laodJSON();
}

let foobarUrl = "https://the-three-must-get-beers.herokuapp.com/";
async function laodJSON() {
  //   console.log("laodJSON");
  const response = await fetch(foobarUrl);
  const foobarData = await response.json();
  console.log("foobarData", foobarData);

  showStaff(foobarData.bartenders);
}

function showStaff(foobarData) {
  console.log(foobarData);
  const staffHolder = document.querySelector(".show-staff");
  const template = document.querySelector("template").content;
  //   staffHolder.textContent = "";
  foobarData.forEach((bartenders) => {
    const klon = template.cloneNode(true);
    klon.querySelector(".name").textContent = bartenders.name;
    klon.querySelector(".statusDetail").textContent = bartenders.statusDetail;
    klon.querySelector(".servingCustomer").textContent = bartenders.servingCustomer;
    staffHolder.appendChild(klon);
  });
}
