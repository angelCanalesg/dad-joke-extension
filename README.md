# Dad joke extension

A simple browser extension that tells dad jokes. <br />
The code serves as an example of how to create a browser extension with React


## Installation
`npm install`

## Development
`npm start` <br />
You will see the extension in the browser at `http://localhost:3000`

## How to use the extension locally
1. Clone the repository
2. Run `npm install`
3. Run `npm run build`
4. Open Chrome and go to `chrome://extensions/`
5. Enable developer mode
6. Click on `Load unpacked`
7. Select the `build` folder from this project
8. The extension should be installed and available in the extensions section

## How to publish the extension globally
1. Increment the version number in `public/manifest.json`
2. Run `npm run build`
3. `build.zip` will be created root of this project - this can be submitted to Google or another browser extension store