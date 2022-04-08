const imgContainer = document.querySelector('.images');
let curImg;

const wait = function (seconds) {
   return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 1000);
   });
};

const createImage = function (imgPath) {
   return new Promise(function (resolve, reject) {
      const imgEl = document.createElement('img');
      imgEl.src = imgPath;
      imgEl.addEventListener('load', function (e) {
         imgContainer.insertAdjacentElement('beforeend', imgEl);
         resolve(this);
      });
      imgEl.addEventListener('error', () => reject('Error loading image'));
   });
};

// createImage('img/img-1.jpg')
//    .then(el => {
//       wait(2).then(() => {
//          el.style.display = 'none';
//          createImage('img/img-2.jpg').then(el => {
//             wait(2).then(() => {
//                el.style.display = 'none';
//                createImage('img/img-3.jpg').then(el => {
//                   wait(2).then(() => (el.style.display = 'none'));
//                });
//             });
//          });
//       });
//    })
//    .catch(err => console.error(err));

createImage('img/img-1.jpg')
   .then(img => {
      curImg = img;
      return wait(2);
   })
   .then(() => {
      curImg.style.display = 'none';
      return createImage('img/img-2.jpg');
   })
   .then(img => {
      curImg = img;
      return wait(2);
   })
   .then(() => {
      curImg.style.display = 'none';
      return createImage('img/img-3.jpg');
   })
   .then(img => {
      curImg = img;
      return wait(2);
   })
   .then(() => {
      curImg.style.display = 'none';
   });
