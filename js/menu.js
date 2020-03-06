(() => {
    const menu = document.querySelector(`.header__burger`);
    const header = document.querySelector(`.header`);
    const main = document.querySelector(`main`);
    menu.addEventListener(`click`, () => {
        header.classList.toggle(`header--active`)
    });
    main.addEventListener(`click`, () =>
        header.classList.remove(`header--active`)
    );
})();