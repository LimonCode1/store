import { pages } from '../controller/index';

let content = document.querySelector('#root');
const router = async (route) => {
	content.innerHTML = '';
	switch (route) {
		case '#/': {
			return content.appendChild(pages.home());
		}
		case '#/products': {
			return content.appendChild(await pages.products());
		}
		default: {
			return content.appendChild(pages.notFound());
		}
	}
};

export { router };
