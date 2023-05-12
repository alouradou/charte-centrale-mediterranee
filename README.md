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
Edit vue.config.js line 5 : `? '/signature/'` with the path where it WILL be deployed
```
pnpm run build
```

Result in `./dist` folder, rename it into `./signature` or whatever you put on line 5 of vue.config.js and place it into your static server
