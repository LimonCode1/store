import products from '../views/products.html';
export default () => {
	const content = document.createElement('div');
	content.innerHTML = products;
	return content;
};
