'use strict';

const populationElements = document.querySelectorAll('span.population');

const populationNumbers = Array.from(populationElements).map((element) => {
  const rawString = element.textContent;
  const cleanedString = rawString.replace(/,/g, '');

  return +cleanedString;
});

const totalPopulation = populationNumbers.reduce((sum, currentPopulation) => {
  return sum + currentPopulation;
}, 0);

const averagePopulation = totalPopulation / populationNumbers.length;

const averageElement = document.querySelector('span.average-population');
const totalElement = document.querySelector('span.total-population');

totalElement.textContent = totalPopulation.toLocaleString('en-US', {
  maximumFractionDigits: 0,
});

averageElement.textContent = averagePopulation.toLocaleString('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
