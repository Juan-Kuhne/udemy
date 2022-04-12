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

/////////////////////////////////////////////////////////////////////////
// The Event Loop
/* 
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
   for (let i = 0; i <= 1000000000; i++) {}
   console.log(res);
});
console.log('Test end');
*/

/////////////////////////////////////////////////////////////////////////
// Bilding a simple promise
/* 
const lotteryPromise = new Promise(function (resolve, reject) {
   console.log('Lottery draw is happening.');
   setTimeout(() => {
      if (Math.random() >= 0.5) {
         resolve('You WIN!!');
      } else {
         reject(new Error('You lost your money ...'));
      }
   }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
   return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 1000);
   });
};

wait(2)
.then(() => {
      console.log('I waited 2 seconds');
      return wait(1);
   })
   .then(() => console.log('I waited 1 second'));
 */

/////////////////////////////////////////////////////////////////////////
// Promisifying the geolocation API
/* 
const getPosition = function () {
   return new Promise(function (resolve, reject) {
      // navigator.geolocation.getCurrentPosition(
         //    position => resolve(position),
         //    err => reject(err)
         // );
         navigator.geolocation.getCurrentPosition(resolve, reject);
   });
};

// Coding challenge 01 code
const whereAmI = function () {
   getPosition()
   .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=356490792968261623635x121369`);
   })
   .then(response => {
         if (!response.ok) throw new Error(`Couldn't search ... ${response.status}`);
         return response.json();
      })
      .then(data => {
         console.log(data);
         console.log(`You are in ${data.city}, ${data.country}`);
         getCountryData(data.country.toLowerCase());
      })
      .catch(err => console.error(`Something went wrong ... ${err}`));
};
whereAmI(-33.933, 18.474);
*/

/////////////////////////////////////////////////////////////////////////
// Async/Await
/* 
const getPosition = function () {
   return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
   });
};

const whereAmI = async function () {
   try {
      // Geolocation
      const pos = await getPosition();
      const { latitude: lat, longitude: lng } = pos.coords;

      // Reverse geocoding
      const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=356490792968261623635x121369`);
      if (!resGeo.ok) throw new Error('Problem getting location data');
      const dataGeo = await resGeo.json();

      // Country data
      const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
      if (!res.ok) throw new Error('Problem getting country');
      const data = await res.json();
      renderCountry(data[0]);

      countriesContainer.style.opacity = 1;
      return `You are in ${dataGeo.city}, ${dataGeo.country}`;
   } catch (err) {
      console.error(err.message);

      // Reject promise returned from async function
      throw err;
   }
};

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//    .then(city => console.log(`2: ${city}`))
//    .catch(err => console.log(`2: ${err.message}`))
//    .finally(() => console.log('3: Finished getting location'));

(async function () {
   try {
      const city = await whereAmI();
      console.log(`2: ${city}`);
   } catch (err) {
      console.log(`2: ${err.message}`);
   }
   console.log('3: Finished getting location');
})();
 */

/////////////////////////////////////////////////////////////////////////
// Running promises in parallel

const get3Countries = async function (c1, c2, c3) {
   try {
      // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
      // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
      // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
      // console.log(data1.capital, data2.capital, data3.capital);

      const data = await Promise.all([
         getJSON(`https://restcountries.com/v3.1/name/${c1}`),
         getJSON(`https://restcountries.com/v3.1/name/${c2}`),
         getJSON(`https://restcountries.com/v3.1/name/${c3}`),
      ]);
      console.log(data.map(d => d[0].capital[0]));
   } catch (err) {
      console.log(err);
   }
};
get3Countries('portugal', 'canada', 'tanzania');
