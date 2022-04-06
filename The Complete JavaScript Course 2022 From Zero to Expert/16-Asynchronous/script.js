'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
   countriesContainer.insertAdjacentText('beforeend', msg);
   // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
   const langKey = Object.keys(data.languages)[0];
   const curKey = Object.keys(data.currencies)[0];

   const html = `
   <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[langKey]}</p>
            <p class="country__row"><span>💰</span>${data.currencies[curKey].name}</p>
          </div>
        </article>
   `;
   countriesContainer.insertAdjacentHTML('beforeend', html);
   // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
/* 
const getCountryData = function (country) {
   const request = new XMLHttpRequest();
   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
   request.send();

   request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);

      const langKey = Object.keys(data.languages)[0];
      const curKey = Object.keys(data.currencies)[0];

      const html = `
   <article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[langKey]}</p>
            <p class="country__row"><span>💰</span>${data.currencies[curKey].name}</p>
          </div>
        </article>
   `;
      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
   });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('brazil');
getCountryData('germany');
 */

////////////////////////////////////////////////////////////////////
// Callback hell

/* 
const getCountryAndNeighbour = function (country) {
   // AJAX call country 1
   const request = new XMLHttpRequest();
   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
   request.send();

   request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);

      // Render country 1
      renderCountry(data);

      // Get neighbour country
      const [neighbour] = data.borders;
      if (!neighbour) return;
      console.log(neighbour);

      // AJAX call country 2
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
      request2.send();

      request2.addEventListener('load', function () {
         const [data2] = JSON.parse(this.responseText);
         console.log(data2);

         // Render country 2
         renderCountry(data2, 'neighbour');
      });
   });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('german');
 */

///////////////////////////////////////////////////////////////////////////
// Promises and the Fetch API

// const getCountryData = function (country) {
//    fetch(`https://restcountries.com/v3.1/name/${country}`)
//       .then(function (response) {
//          console.log(response);
//          return response.json();
//       })
//       .then(function (data) {
//          console.log(data);
//          renderCountry(data[0]);
//       });
// };

const getJSON = function (url, errorMsg = 'Something went wrong ...') {
   return fetch(url).then(response => {
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
      return response.json();
   });
};

const getCountryData = function (country) {
   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
      .then(data => {
         renderCountry(data[0]);
         if (!data[0].borders) throw new Error('Neighbour not found!');
         const neighbour = data[0].borders[0];

         return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found');
      })
      .then(data => renderCountry(data[0], 'neighbour'))
      .catch(err => {
         console.error(err);
         renderError(`Something went wrong: ${err.message}. Try again!`);
      })
      .finally(() => {
         countriesContainer.style.opacity = 1;
      });
};
btn.addEventListener('click', function () {
   getCountryData('australia');
});
