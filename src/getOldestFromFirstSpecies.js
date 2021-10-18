const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const objPersonId = employees.find((person) => person.id === id);
  const firstSpecie = objPersonId.responsibleFor[0];
  const objSpecie = species.find((animal) => animal.id === firstSpecie).residents;
  const oldAnimal = objSpecie.reduce((acc, currentValue) => {
    if (currentValue.age > acc.age) {
      return currentValue;
    } return acc;
  });
  const { name, sex, age } = oldAnimal;
  return [name, sex, age];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
