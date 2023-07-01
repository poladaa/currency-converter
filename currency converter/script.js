"use strict";
const currency1 = document.getElementById("currency-1");
const currency2 = document.getElementById("currency-2");
const worth1 = document.getElementById("worth-first");
const worth2 = document.getElementById("worth-second");
const exchange = document.querySelector(".exchange");

updateRate();

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/51d844bb5295f056ad043715/latest/${currency1.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      const rate = data.conversion_rates[currency2.value];
      exchange.textContent = `1 ${currency1.value} = ${
        rate + " " + currency2.value
      }`;
      worth2.value = (worth1.value * rate).toFixed(2);
    });
}

currency1.addEventListener("change", updateRate);
currency2.addEventListener("change", updateRate);
