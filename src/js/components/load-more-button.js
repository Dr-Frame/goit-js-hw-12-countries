const loadMoreBtn = {
  enable() {
    refs.loadMoreBtn.disabled = false;
    refs.loadMoreBtnLabel.textContent = 'Показать ещё';
    refs.loadMoreBtnSpinner.classList.add('is-hidden');

    refs.loadMoreBtn.classList.remove('is-hidden');
  },
  disable() {
    refs.loadMoreBtn.disabled = true;
    refs.loadMoreBtnLabel.textContent = 'Загружаем...';
    refs.loadMoreBtnSpinner.classList.remove('is-hidden');
  },
};
