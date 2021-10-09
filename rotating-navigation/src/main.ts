import './style.scss';

const hamburger = document.querySelector('.hamburger .icons');
const content = document.querySelector('.content');
const sidebar = document.querySelector('.sidebar');

hamburger?.addEventListener('click', () => {
	// console.log(event);
	hamburger.classList.toggle('close');
	content?.classList.toggle('transform-rotate');
	sidebar?.classList.toggle('show');
});