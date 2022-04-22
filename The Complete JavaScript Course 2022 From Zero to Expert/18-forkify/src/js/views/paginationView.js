import View from './View.js';
const iconPath = new URL('../../img/icons.svg', import.meta.url).href;

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1)
      return this._generateMarkupButton(0, curPage);

    // Last page
    if (curPage === numPages && numPages > 1)
      return this._generateMarkupButton(1, curPage);

    // Other page
    if (curPage < numPages) return this._generateMarkupButton(2, curPage);

    // Page 1, and there are NO other pages
    return ``;
  }
  _generateMarkupButton(direction, curPage) {
    const fBtnMarkup = `
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
         <span>Page ${curPage + 1}</span>
         <svg class="search__icon">
            <use href="${iconPath}#icon-arrow-right"></use>
         </svg>
      </button>
    `;
    const bBtnMarkup = `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
         <svg class="search__icon">
            <use href="${iconPath}#icon-arrow-left"></use>
         </svg>
         <span>Page ${curPage - 1}</span>
      </button>
    `;

    if (direction === 0) return fBtnMarkup; // forward
    if (direction === 1) return bBtnMarkup; // backwards
    if (direction === 2) return fBtnMarkup + bBtnMarkup; // both ways
  }
}

export default new PaginationView();
