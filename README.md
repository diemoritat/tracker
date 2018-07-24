# Tracker App

This is just a somple application to list charges. There's also a page to add new ones. All the charges are saved locally using `localStorage`.

## Examples


Desktop

![Gif simulating the desktop app](https://image.ibb.co/k028W8/desktop.gif)


Mobile

![Gif simulating the mobile app](https://image.ibb.co/gNbfdo/mobile.gif)

### Installing and running the project locally

### Clone the project

```sh
$ git clone https://github.com/diemoritat/tracker.git
$ cd tracker
```

### Install the dependencies with yarn

```
yarn install
```

### Run it locally

```
yarn serve
```

The application will be running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.166.101:8080/


## Folder Structure

	├── public/	
	├── src/
	|   ├── assets/
	|   ├── store/
	|   ├── styles/	
	|   ├── views/
	├── tests/	
	|   ├── unit/
	├── .gitignore
	├── babel.config.js
	├── package.json
	├── README.md
	├── vue.config.js
	└── yarn.lock

## Running the tests

Explain how to run the automated tests for this system

| Command | Description |
| - | - |
| `yarn dev` | Start the application in development mode |
| `yarn build` | Build the application for production |
| `yarn start` | Start the application in production mode |
| `yarn build:start` | Build and start for production (good for CI) |
| `yarn lint` | Runs [ESLint](https://eslint.org/) on your files |
| `yarn test:unit` | Runs [Jest](https://facebook.github.io/jest/) automated tests |
| `yarn test:unit:watch` | Runs Jest automated tests in watch mode |
| `yarn run:prepush` | Runs all tasks necessary for code-quality assurance |

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## *Disclaimer*

*This project is not a product, will never be, will not go into production, and has no intention to serve any purpose other than to be a test application to a development position.*