import './style.css';

const appElement = document.querySelector('#app');
let image;
let h2;
let start;
let timeToLoad = 5000;

const startBlurredLoading = (timeStamp) => {
	if (start === undefined) {
		start = timeStamp;
	}
	const elapsed = timeStamp - start;
	if (elapsed < timeToLoad) {
		const blurValue = Math.min((5 * timeToLoad) / elapsed, 50);
		h2.innerText = Math.round(500 / blurValue) + '%';
		image.style.filter = `blur(${blurValue - 5}px)`;
		requestAnimationFrame(startBlurredLoading);
	}
};

function init() {
	image = document.createElement('img');
	image.src =
		'https://images.unsplash.com/photo-1560961911-ba7ef651a56c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80';
	image.alt = 'loading-template';
	image.classList.add('loading-image');

	h2 = document.createElement('h2');
	h2.innerText = '0%';
	h2.classList.add('percent-loading-text');

	appElement.insertAdjacentElement('afterbegin', image);
	appElement.insertAdjacentElement('afterbegin', h2);
	requestAnimationFrame(startBlurredLoading);
}

init();
