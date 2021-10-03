import './style.css';
const modules = import.meta.globEager('./assets/**.jpg');

const app = document.getElementById('app');
const expansionCards = app.querySelector('#expansion-cards');

function changeLayout(e) {
	const children = [...expansionCards.children];
	children.forEach((child) => {
		if (child.classList.contains('image-spread')) {
			child.classList.remove('image-spread');
		}
	});

	e.target.classList.add('image-spread');
}

let i = 0;
for (const path in modules) {
	const image = document.createElement('img');
	image.src = path;
	image.classList.add(`image-${i}`);
	if (i === 0) {
		image.classList.add('image-spread');
	}
	i++;
	app.style.setProperty('--grid-repeat', i);
	image.addEventListener('click', changeLayout);
	expansionCards.appendChild(image);
}
