import adapter from "@sveltejs/adapter-static"; 

// optional
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';
/** @type {import(""@sveltejs/kit").Config} */
const config = {
	
	preprocess: preprocess({
		postcss: true,
	}),
	kit: {
		adapter: adapter({
		  // default options are shown. On some platforms
		  // these options are set automatically — see below
		  pages: 'docs',
		  assets: 'docs',
		  fallback: null,
		  precompress: false
		}),
		files: {
			assets: 'static'
		},
		paths: {
            // change below to your repo name
            base: "",
        },
		prerender: {
		  // This can be false if you're using a fallback (i.e. SPA mode)
		  default: true
		}
	  }
	
};

export default config;
