const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allAnimal = species.reduce((acc, currentValue) => {
  acc[currentValue.name] = currentValue.residents.length;
  return acc;
}, {});

function countAnimals(animal) {
  if (animal === undefined) return allAnimal;
  const { specie, sex } = animal;
  const objAnimal = species.find((Element) => specie === Element.name);
  const { residents } = objAnimal;
  if (sex === undefined) return residents.length;
  const sexAnimal = objAnimal.residents.filter((element2) => element2.sex === sex);
  return sexAnimal.length;
}
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
