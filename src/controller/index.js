import home from './home.controller';
import products from './products.controller';
import notFound from './404.controller';

const pages = {
	home: home,
	products: products,
	notFound: notFound,
};

export { pages };
