const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const personAge = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) personAge.child += 1;
    if (element.age >= 18 && element.age < 50) personAge.adult += 1;
    if (element.age >= 50) personAge.senior += 1;
  });
  return personAge;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) return 0;
  const child = countEntrants(entrants).child * prices.child;
  const adult = countEntrants(entrants).adult * prices.adult;
  const senior = countEntrants(entrants).senior * prices.senior;
  const totalEntry = child + adult + senior;
  return totalEntry;
}

module.exports = { calculateEntry, countEntrants };
