const imgContainer = document.querySelector('.images');
let curImg;

const wait = function (seconds) {
   return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 1000);
   });
};

const createImage = function (imgPath, className = '') {
   return new Promise(function (resolve, reject) {
      const imgEl = document.createElement('img');
      imgEl.classList.add(className);
      imgEl.src = imgPath;
      imgEl.addEventListener('load', function (e) {
         imgContainer.insertAdjacentElement('beforeend', imgEl);
         resolve(this);
      });
      imgEl.addEventListener('error', () => reject('Error loading image'));
   });
};

const loadNPause = async function () {
   curImg = await createImage('img/img-1.jpg');
   await wait(2);
   curImg.style.display = 'none';

   curImg = await createImage('img/img-2.jpg');
   await wait(2);
   curImg.style.display = 'none';

   curImg = await createImage('img/img-3.jpg');
   await wait(2);
   curImg.style.display = 'none';
};

const loadAll = async function (imgArr) {
   try {
      // const imgs = imgArr.map(img => createImage(img, 'parallel'));
      const imgs = await Promise.all(imgArr.map(async img => await createImage(img, 'parallel')));
      console.log(imgs);
   } catch (err) {
      console.log(err);
   }
};

// loadNPause();
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
