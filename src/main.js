import './index.sass';

import { router } from './router/index.routes';

// evento de SPA
window.addEventListener('hashchange', () => {
	router(window.location.hash);
});
