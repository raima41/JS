/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};
function showObjectKeys(obj) {
  return Object.keys(obj);
}

const keys = showObjectKeys(audi);
console.log(keys);
// Kaip pameluoti savo merginai?
// Niekaip, ta gyvatė vistiek viską sužinos
