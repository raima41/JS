/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const button = document.getElementById('btn');
const output = document.getElementById('output');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((users) => {
      const cards = users.map((user) => {
        return `
          <div class="card">
            <img src="${user.avatar_url}" alt="${user.login}" />
            <h3>${user.login}</h3>
          </div>
        `;
      });
      output.innerHTML = cards.join('');
    })
    .catch((error) => console.error(error));
});
