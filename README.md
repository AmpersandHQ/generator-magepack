# MAGEPACK

A Yeoman generator for a Magento-ready, ReactJS/Redux, node module

## How to install

Make sure Node.js 6.30 is installed and Yeoman is available for it. See the end of this readme for Node.js 6.3.0 install instructions via nodenv.

1. Git clone this repo (`git clone git@github.com:AmpersandHQ/generator-magepack.git`) to you local machine
2. Install yeoman `npm install -g yo`
3. From inside the generator-magepack directory run, `npm link`
4. You're ready to generate a new node module

## How to use

1. Go to your target directory
2. Run `yo magepack`
3. Follow the prompts
4. Once yeoman has finsihed, run `npm i`

## Start dev

A sample application is included as a starting point. Making use of ReactJS and Redux, the main application files can be found in `view/frontend/web/js/src`.

The `view/frontend/web/js/src/index.js` file pulls together you application for bundling. The `view/frontend/web/js/dist/` contains the final application distributable.

The structure of the generated files follows the structure of a Magento 2 JavaScript application. You can use this generator directly in `app/code`, `app/design` or `vendor/ampersand/module`. 

**You will need to update the requirejs-config.js at the very least before being 100% Magento-ready.**

The following commands are available:

* `npm run dev` to start a webpack dev server on http://localhost:8080/webpack-dev-server/ ~this includes hot reloading of ReactJS components :D~ Hot reloading currently unavailable, your browser will do a full refresh on any changes.
* `npm test` to run any jest spec files in `view/frontend/web/js/spec/` (this command will also run a full build)
* `npm run lint` to run eslint against your files
* `npm run build` to run the production webpack build of your module


## Install Node.js 6.3.0

* `cd /opt/boxen/node-build`
* `git pull origin master`
* `nodenv install 6.3.0`
* `nodenv global 6.3.0`
