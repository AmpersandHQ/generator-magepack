# generator-amp-node

A Yeoman generator for a ReactJS, Redux, node module

## How to install

Make sure Node.js 6.30 is installed and Yeoman is available for it. See the end of this readme for Node.js 6.3.0 install instructions via nodenv.

1. Git clone this repo (`git clone git@github.com:AmpersandHQ/generator-amp-node.git`) to you local machine
2. Install yeoman `npm install -g yo`
3. From inside the generator-amp-node directory run, `npm link`
4. You're ready to generate a new node module

## How to use

1. Go to your target directory
2. Run `yo amp-node`
3. Follow the prompts
4. Once yeoman has finsihed, run `npm i`

## Start dev

A sample application is included as a starting point. Making use of ReactJS and Redux, the main application files can be found in `app/`.

The `index.js` files pulls together you application for bundling. The `dist/` contains the final application distributable.

See the `example/js/` directory for detail on how this application is put together for the Browser. The structure of the example application follows the structure of a Magento 2 JavaScript application.

The following commands are available:

* `npm run dev` to start a webpack dev server on http://localhost:8080/webpack-dev-server/ this includes hot reloading of ReactJS components :D
* `npm run test` to run any jest spec files in `test/` (this command will also run a full build)
* `npm run lint` to run eslint against your files
* `npm run build` to run the production webpack build of your module


## Install Node.js 6.3.0

* `cd /opt/boxen/node-build`
* `git pull origin master`
* `nodenv install 6.3.0`
* `nodenv global 6.3.0`