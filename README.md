# MAGEPACK

A Yeoman generator for a Magento 2 ready, ReactJS/Redux application

## Install

1. Install yeoman `npm install -g yo`
2. Install magepack `npm install -g generator-magepack`
3. Done!

## Get started

1. Go to your target directory
2. Run `yo magepack`
3. Follow the prompts
4. Once yeoman has finsihed, run `npm i`

### Start dev

Run the dev server `npm run dev`.

A sample application is included as a starting point. Making use of ReactJS and Redux, the main application files can be found in `view/frontend/web/js/src`.

The `view/frontend/web/js/src/index.entry.js` file pulls together your application for bundling. The `view/frontend/web/js/dist/` contains the final application distributable.

The structure of the generated files follows the structure of a Magento 2 JavaScript application. You can use this generator directly in `app/code`, `app/design` or `vendor/ampersand/module`.

**You will need to update the `view/frontend/web/js/App.js` at the very least before being 100% Magento-ready:**

```diff
define(
-   ['react', 'react-dom', 'prop-types', 'redux', 'react-redux', 'redux-thunk', 'app.min'],
+   ['react', 'react-dom', 'prop-types', 'redux', 'react-redux', 'redux-thunk', 'Vendor_Module/js/dist/app.min'],
    function(React, ReactDOM, PropTypes, Redux, ReactRedux, ReduxThunk, ReactApp) {
```

### Commands

* `npm run dev` to start a webpack dev server on http://localhost:8080/webpack-dev-server/
* `npm test` to run any Jest spec files in `view/frontend/web/js/spec/` (this command will also run a full build)
* `npm run lint` to run ESLint against your files
* `npm run build` to run the production webpack build of your module


## Other

### Linting

ESLint is used for linting. http://eslint.org/

Rules can be found under the `eslintConfig` key in `package.json`.

ESLint will be run automatically on every `npm run build` and `npm run dev`.


### Prettier

Prettier is an opinionated code formatter. https://prettier.io/playground/

This will be run either by your editor (requires setup) or as a precommit hook. This will re-format your files that are marked as "staged" via `git add` before you commit.


### Tests

#### Unit

Jest is used for unit testing. https://facebook.github.io/jest/
We also use React Test Renderer for testing the front-end output. A handy guide to using this is [here](https://itnext.io/testing-react-16-3-components-with-react-test-renderer-without-enzyme-d9c65d689e88).

Test files should be added to: `view/frontend/web/js/spec/` in the format `filename.spec.js`

Unit tests can be run via `npm test`.

#### Snapshot

Snapshot testing is available, see documentation here: http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest

You should commit snapshots to version control.




