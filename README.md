# Dad joke extension

A simple browser extension that tells dad jokes. <br />
The code serves as an example of how to create a browser extension with React.

## Installation
- `npm install`

## Development
- `npm start` <br />
- Visit `http://localhost:3000` in your browser to see the extension

## How to use the extension locally
- `npm run build`
- Open Chrome and go to `chrome://extensions`
- Enable `Developer mode`
- Click on `Load unpacked`
- Select the `build` folder from the root of this project
- The extension should be installed and available in the extensions section

## How to publish the extension globally
- Increment the version number in `public/manifest.json`
- `npm run build`
- `build.zip` will be created root of this project - this can be submitted to Google or another browser extension store