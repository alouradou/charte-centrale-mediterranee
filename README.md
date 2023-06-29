# Signatures Associations

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
# or
vite
```

### Compiles and minifies for production
```
npm run build
# or (see 'Production on static server' part)
vite build
```

### Preview production
```
npm run preview
```


### Production on static server

To deploy on `https://host/signature` on static server, use :
```
 vite build --base=/signature/
```

Default behaviour of `vite build` is:
```
vite build --base=/
```

Result in `./dist` folder, rename it into `./signature` or whatever you put after `--base=` 
and place it into your static server.
