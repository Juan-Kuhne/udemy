import View from './View.js';
const iconPath = new URL('../../img/icons.svg', import.meta.url).href;

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  _togglewindow() {
    [this._window, this._overlay].forEach(el => el.classList.toggle('hidden'));
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this._togglewindow.bind(this));
  }

  _addHandlerHideWindow() {
    [this._btnClose, this._overlay].forEach(el =>
      el.addEventListener('click', this._togglewindow.bind(this))
    );
  }

  _addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();

      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
