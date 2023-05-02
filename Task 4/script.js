/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
fetch(ENDPOINT)
  .then((response) => response.json())
  .then((carsData) => {
    const container = document.querySelector('.container');
    const brands = carsData.map((car) => car.brand);
    brands.forEach((brand) => {
      const brandDiv = document.createElement('div');
      brandDiv.classList.add('brand');
      const brandTitle = document.createElement('h2');
      brandTitle.innerText = brand;
      brandDiv.appendChild(brandTitle);
      const modelsList = document.createElement('ul');
      const brandModels = carsData.find((car) => car.brand === brand).models;
      brandModels.forEach((model) => {
        const modelItem = document.createElement('li');
        modelItem.innerText = model;
        modelsList.appendChild(modelItem);
      });
      brandDiv.appendChild(modelsList);
      container.appendChild(brandDiv);
    });
  })
  .catch((error) => console.error(error));
