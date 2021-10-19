const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firtSpecie = employees.find((person) => person.id === id).responsibleFor[0];
  const animals = species.find((animal) => animal.id === firtSpecie).residents;
  const oldAnimal = animals.reduce((acc, currentValue) => {
    if (currentValue.age > acc.age) {
      return currentValue;
    } return acc;
  });
  const { name, sex, age } = oldAnimal;
  return [name, sex, age];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
