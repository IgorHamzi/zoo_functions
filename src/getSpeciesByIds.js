const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const object = species.filter((nome) => ids.includes(nome.id));
  if (ids.length === undefined) {
    return [];
  }
  return object;
}
console.log(getSpeciesByIds('lionId'));

module.exports = getSpeciesByIds;
