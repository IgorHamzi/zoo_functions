const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const object = species.find((element) => animal.includes(element.name));
  const ageAnimal = object.residents.every((element2) => element2.age >= age);
  return ageAnimal;
}

module.exports = getAnimalsOlderThan;
