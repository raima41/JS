/*  ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
 ------------------------------------------------------------------- */

const form = document.querySelector('form');
const output = document.getElementById('output');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const kgInput = document.getElementById('search');
  const kg = parseFloat(kgInput.value);

  if (!isNaN(kg)) {
    const lb = kg * 2.2046;
    const g = kg / 0.001;
    const oz = kg * 35.274;

    output.innerHTML = `
       <p>${kg} kg = ${lb.toFixed(2)} lb</p>
       <p>${kg} kg = ${g.toFixed(2)} g</p>
       <p>${kg} kg = ${oz.toFixed(2)} oz</p>
     `;
  } else {
    output.innerHTML =
      '<p>Please enter a valid number for weight in kilograms, ner cia ko issidirbineti.</p>';
  }
});
