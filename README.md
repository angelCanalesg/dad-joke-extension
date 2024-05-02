# Dad joke extension

A simple browser extension that tells dad jokes. <br />
The code serves as an example of how to create a browser extension with React 18.

## Installation
- `npm install`

## Development
- `npm start` <br />
- Visit `http://localhost:3000` in your browser to see the extension as a web page

## Use locally
- `npm run build`
- Open Chrome and go to `chrome://extensions`
- Enable `Developer mode`
- Click on `Load unpacked`
- Select the `/build` folder from the root of this project
- The extension should be installed and available in the extensions section

Once you have added the extension to Chrome - you can use `npm run build:dev` to watch for changes and rebuild the extension automatically.
Just close & re-open it in chrome to see the latest changes.

## Publish
- Increment the version number in `public/manifest.json`
- `npm run build:prod`
- `build.zip` will be created in the root of this project - this can be submitted to Google or another browser extension store