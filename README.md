# react-boiler

## Features

This is a boilerplate project that features a number of modern modules
pre-configured for rapid development of apps.


**Featured Modules**:
 - Babel 6
 - Webpack 4
 - React 16
 - Redux 4
 - Styled Components 3
 - React Router 4


It also features code quality modules.


**Code Quality Modules**:
 - ESLint 4 (extends airbnb)
 - git-hooks (pre-push)


## Getting Started

 1. Fork this Repo
 2. Clone your fork to your local machine
 3. Create a new repository on GitLab or GitHub
 4. Copy your new repository's URL and use it to set the origin url
 	- `$ git remote set-url origin {{ REPO URL }}`
 5. Install dependencies (`$ yarn`)
 6. Develop within the `./src/` directory
 7. Test your app by running (`$ yarn start`)


## Project Structure

 - `src/` - Source Directory
	- `actions/` - Action Creators for Redux
	- `components/` - Functional Components
	- `pages/` - Routed Components
	- `reducers/` - Redux Data Stores (reducers)
	- `styled/` - Styled/Layout Oriented Components
	- `utils/` - Utility and Helper Functions
	- `routes.js` - Route Configuration
	- `app.js` - Main App Container
 - `dist/` - Distribution-ready Code
 - `assets/` - Static Assets (images, font files, et cetera)
