import App from './App.svelte';
const el = document.querySelector('#test')
const app = new App({
	target: el,
	props: {
		// name: 'world'
	}
});

export default app;