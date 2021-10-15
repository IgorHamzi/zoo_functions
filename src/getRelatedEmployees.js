const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const manager = employees.some((element) => element.managers.includes(id));
  return manager;
}

function getRelatedEmployees(managerId) {
  const subManager = employees.filter((element) => element.managers.includes(managerId));
  const namesManager = subManager.map((element2) => `${element2.firstName} ${element2.lastName}`);
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } return namesManager;
}
getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');
module.exports = { isManager, getRelatedEmployees };
