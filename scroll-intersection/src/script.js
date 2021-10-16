const sections = document.querySelectorAll('.section');
const appContainer = document.querySelector('.container');

const options = {
	threshold: 0,
	rootMargin: '0px 0px -200px 0px',
};

const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		console.log(entry);
		if (!entry.isIntersecting) {
			return;
		}
		entry.target.classList.add('inverse');
		observer.unobserve(entry.target);
	});
}, options);

sections.forEach((section, idx) => {
	if (idx % 2 === 0) {
		section.classList.add('keep-left');
	} else {
		section.classList.add('keep-right');
	}
	observer.observe(section);
});
