const whereAmI = function (lat, lng) {
   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=356490792968261623635x121369`)
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

// document.querySelector('.btn-country').addEventListener('click', function () {
//    whereAmI();
// });

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
