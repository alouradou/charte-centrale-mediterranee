# Signatures Associations

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Production on static server

To deploy in signature-med folder on static server, use :
```
 vite build --base=/signature/
```

Default behaviour of `vite build` is:
```
vite build --base=/
```

Result in `./dist` folder, rename it into `./signature` or whatever you put after `--base=` 
and place it into your static server.
