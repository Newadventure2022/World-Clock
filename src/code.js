function showSelectedCity(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:mm A");

    alert(`It is ${currentTime} in ${event.target.value}`);
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

  //Valencia
  let valenciaElement = document.querySelector("#valencia");
  let valenciaDateElement = valenciaElement.querySelector(".date");
  let valenciaTimeElement = valenciaElement.querySelector(".time");
  let valenciaTime = moment().tz("Europe/Valencia");

  valenciaDateElement.innerHTML = valenciaTime.format("MMMM, D, YYYY");

  valenciaTimeElement.innerHTML = valenciaTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
