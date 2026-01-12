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
button. A notification should popup. Close the notification by clicking the (X).
The application should crash with:

```
Uncaught TypeError: Cannot read properties of undefined (reading 'options')
    at Se (TouchRipple.js:133:1)
    at Object.get (TouchRipple.js:133:1)
    at CircularProgress.js:57:1
    at Proxy.findIndex (<anonymous>)
    at CircularProgress.js:57:1
    at TouchRipple.js:133:1
    at produce (TouchRipple.js:133:1)
    at TouchRipple.js:133:1
    at Array.reduce (<anonymous>)
    at i (TouchRipple.js:133:1)
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
