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


# Check the vite.config.js for configuration changes for both host and remote app
