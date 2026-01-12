## Requirements

- Node.js (tested on v24, might work on earlier versions)
- `yarn`

## Instructions

To reproduce the issue, do:

```
$ yarn
$ yarn start:prod
```

Open http://localhost:1212/ in your browser. You'll see a button. Click the
button. A notification should popup. Close the notification. The application
should crash with:

```
Cannot read properties of undefined (reading 'options')
TypeError: Cannot read properties of undefined (reading 'options')
    at we (http://localhost:1212/dist/renderer.dev.js:2:273722)
    at Object.get (http://localhost:1212/dist/renderer.dev.js:2:272253)
    at http://localhost:1212/dist/renderer.dev.js:2:225089
    at Proxy.findIndex (<anonymous>)
    at http://localhost:1212/dist/renderer.dev.js:2:225060
    at http://localhost:1212/dist/renderer.dev.js:2:285265
    at produce (http://localhost:1212/dist/renderer.dev.js:2:275620)
    at http://localhost:1212/dist/renderer.dev.js:2:285256
    at Array.reduce (<anonymous>)
    at i (http://localhost:1212/dist/renderer.dev.js:2:285173)
```

This issue only occurs in a production build. For comparison, if you start the
application with

```
yarn start:dev
```

everything should work as expected.

The only difference between `yarn start:dev` and `yarn start:prod` is

```
# start:dev
webpack-cli serve --mode development

# start:prod
webpack-cli serve --mode production
```
