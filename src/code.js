function showSelectedCity(event) {
  if (event.target.value.length > 0) {
    let cityZone = event.target.value;
    if (cityZone === "here") {
      cityZone = moment.tz.guess();
    }
    let cityName = cityZone.replace("_", "").split("/")[1];
    let currentTime = moment()
      .tz(cityZone)
      .format("dddd, MMMM D, YYYY h:mm[<small>]A[</small>]");
    let worldElement = document.querySelector("#world");

    worldElement.innerHTML = `It is ${currentTime} in ${cityName}`;
  }
}

let citySelect = document.querySelector("#select");
citySelect.addEventListener("change", showSelectedCity);

function updateTime() {
  // Brisbane
  let brisbaneElement = document.querySelector("#brisbane");
  let brisbaneDateElement = brisbaneElement.querySelector(".date");
  let brisbaneTimeElement = brisbaneElement.querySelector(".time");
  let brisbaneTime = moment().tz("Australia/Brisbane");

  brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM, D, YYYY");

  brisbaneTimeElement.innerHTML = brisbaneTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM, D, YYYY");

  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  //Dublin
  let dublinElement = document.querySelector("#dublin");
  let dublinDateElement = dublinElement.querySelector(".date");
  let dublinTimeElement = dublinElement.querySelector(".time");
  let dublinTime = moment().tz("Europe/Dublin");

  dublinDateElement.innerHTML = dublinTime.format("MMMM, D, YYYY");

  dublinTimeElement.innerHTML = dublinTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  // Johannesburg
  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgDateElement = johannesburgElement.querySelector(".date");
  let johannesburgTimeElement = johannesburgElement.querySelector(".time");
  let johannesburgTime = moment().tz("Africa/Johannesburg");

  johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM, D, YYYY");

  johannesburgTimeElement.innerHTML = johannesburgTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
