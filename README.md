# CK-horselife

## How to distribute it
npm run build ( Build the vue-files with poi )

npm run serve ( Serve the built files with poi)

Move images to new static folder 

Check that it works with serve again

Move all the files in the docs folder to the distributed server

### Polyfills

By default we only polyfill `window.Promise` and `Object.assign`. You can add more polyfills in `./src/polyfills.js`.

### Code splitting

As webpack supports both [dynamic import](https://webpack.js.org/guides/code-splitting-async/#dynamic-import-import-) and [`require.ensure`](https://webpack.js.org/guides/code-splitting-async/#require-ensure-) syntax, we would recommend you to stick to `require.ensure` for now because of [performance issue](https://github.com/webpack/webpack/issues/4636).

---

This project is generated by [create-vue-app](https://github.com/egoist/create-vue-app).
