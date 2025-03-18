const btnMenu = Array.from(document.querySelectorAll('.categories__button'));

btnMenu.forEach((btns) => {
	btns.addEventListener('click', () => {
		btnMenu.forEach((btns) => {
			btns.classList.remove('is-active');
		});
		btns.classList.add('is-active');
	});
});