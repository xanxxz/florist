export function chooseMenu(btnMenu) {
	btnMenu.forEach((btns) => {
		btns.addEventListener('click', () => {
			btnMenu.forEach((btns) => {
				btns.classList.remove('is-active');
        btns.disabled = false;
			});
			btns.classList.add('is-active');
      btns.disabled = true;
		});
	});
};

  window.addEventListener('scroll', () => {
    const headerMenu = document.querySelector('.main__menu')
    if (window.pageYOffset > 155 && window.pageYOffset < 13780 && window.innerWidth < 825) {
        headerMenu.classList.add('fixed')
    } else {
        headerMenu.classList.remove('fixed')
    }
  })

export function scroll(place) {
  place.scrollIntoView({behavior: "smooth", block: "center"});
};
