const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function vericarId(nameOrId) {
  const { name, id } = nameOrId;
  let objName = employees.find((element) =>
    element.firstName === name || element.lastName === name || element.id === id);
  if (objName === undefined) {
    objName = employees.find((element) => element.id === nameOrId);
  }
  if (objName === undefined) throw new Error('Informações inválidas');
  return objName;
}
function objectEmployees(nameOrId) {
  const ObjectNameRetornado = vericarId(nameOrId);
  let animals = ObjectNameRetornado.responsibleFor;
  animals = animals.map((element) =>
    species.find((animal) => animal.id === element));
  const locationAnimal = animals.map((element) => element.location);
  const speciesAnimal = animals.map((element) => element.name);
  const result = {
    id: ObjectNameRetornado.id,
    fullName: `${ObjectNameRetornado.firstName} ${ObjectNameRetornado.lastName}`,
    species: speciesAnimal,
    locations: locationAnimal,
  };
  return result;
}
function all() {
  const employeesId = employees.map((element) => element.id);
  const objAll = employeesId.map((element) => objectEmployees(element));
  return objAll;
}
function getEmployeesCoverage(nameOrId) {
  if (nameOrId === undefined) {
    return all();
  } return objectEmployees(nameOrId);
}

module.exports = getEmployeesCoverage;
