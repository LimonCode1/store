import notFound from '../views/404.html';

export default () => {
	const content = document.createElement('div');
	content.innerHTML = notFound;
	return content;
};
