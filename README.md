# microfronten-demo
Microfrontend demo using vite

# pnpm is a fast, disk space-efficient package manager for JavaScript and Node.js. It stands for "Performant NPM", and it is an alternative to other package managers like npm and Yarn. The primary advantage of pnpm is its handling of dependencies in a more efficient way, especially when dealing with multiple projects or large dependency trees.

# pnpm is used where dependencies can be share between app

To run and install the microfrontend-app
# HOST
- pnpm create vite@latest . --template react
- pnpm install
Here i used federation for sharing resources from remote to host using 
  - # pnpm install @originjs/vite-plugin-federation@1.3.6

# REMOTE-APP
- pnpm create vite@latest . --template react
- pnpm install
Here i used federation for sharing resources from remote to host using 
  - # pnpm install @originjs/vite-plugin-federation@1.3.6

I had made changes in remote-app package.json for to watch changes 
  # concurrently \"vite build --watch\"  \"vite preview --port 5001 --strictPort\""


Change's vite config for resource sharing for host-app

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
	react(),
  	federation({
   	   name: 'app',
	   remotes:{
		remoteApp:'http://localhost:5001/assets/remoteEntry.js'
	   },
	   shared: ['react','react-dom']	
	}), 
	
],
 build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})


Change's vite config for resource sharing for Remote-app

  import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
	react(),
  	federation({
   	   name: 'remote_app',
       filename:'remoteEntry.js',
        exposes: {
          './Button':'./src/components/Button',
          './Header':'./src/components/Header',
          './MyProvider': './src/MyContext',
        },
	   shared: ['react','react-dom']	
	}), 
	
],
 build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
