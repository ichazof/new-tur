import App from './App.svelte';
const el = document.querySelector('#card-own')
const link = document.createElement( "link" );
link.href = 'https://anexkrk.alyans.ru/bundle.css';
link.type = "text/css";
link.rel = "stylesheet";

document.getElementsByTagName( "head" )[0].appendChild( link );
const app = new App({
	target: el,
	props: {
		// name: 'world'
	}
});

export default app;