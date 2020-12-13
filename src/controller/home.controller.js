import home from '../views/home.html';
export default () => {
	const content = document.createElement('div');
	content.classList = 'text-warning';
	content.innerHTML = home;
	return content;
};
