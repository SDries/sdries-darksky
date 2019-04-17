# Technical assignment front-end engineer
Make an application that allows the user to view the observed (in the past 30 days) or forecasted (in the future) daily weather conditions for a given location using the [Dark Sky API](https://darksky.net/dev/docs).

You are free to use the tools and frameworks you prefer, however we strongly suggest you keep the hard skills of the job offer in mind.

**Minimal requirements**

The three pillars of front-end development are HTML, CSS and JavaScript. We would like to see you know how to use them for the right job.
* Use ReactJS
* Pay attention to semantics: any HTML might work, but choosing the right tags show you care
* Show us you know how to create a modern user interface using CSS or your favourite CSS preprocessor
* Communicate to the Dark Sky API through a PHP or JavaScript back-end

## The application

* [Demonstration](#demonstration)
* [Installation](#installation)
* [Commands](#commands)
* [Used packages](#used-packages)
* [Dependencies](#dependencies)
* [DevDependencies](#devdependencies)
* [Environment](#environment)
* [Architecture of the backend](#architecture-of-the-backend)
* [About the react frontend](#about-the-react-frontend)

### Demonstration

To demonstrate the application I've hosted it [on heroku](https://sdries-darksky.herokuapp.com/).

Be sure to have a look!

Update the demo using `heroku-deploy` (also mentioned in [Commands](#commands)).

### Installation

* Run `npm install` in this directory
* Run `npm install` in the 'client' directory
* Globally install nodemon ([Used packages](#used-packages))

### Commands

* Run just the server: `npm run server` to use nodemon OR `node server.js`
* Run just the react application: `npm run client` OR `cd client && npm run start`
* Run just the tests: `npm run test`
* Run the server and the react application: `npm run dev`
* To eslint the server files, use `npm run eslint`. (or set up your IDE)
* To deploy the master branch the application to heroku use `heroku-deploy`
* `heroku-postbuild`, this command is a heroku deployment hook and will be called when the application finished deployment. It builds the react application

### Used packages:

* nodemon - to restart the server if any changes occur. Install using `npm install -g nodemon`.

#### Dependencies:

* `concurrently` - to run multiple commands concurrently
* `express` - framework for node
* `express-validator` - An express.js middleware for validator (validate the request params before sending them to the dark sky API).
* `async` - A utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript (used to make multiple time machine calls in parallel).
* `memory-cache` - A simple in-memory cache for node.js (used to cache the time machine call's response, instead of making 30 calls every time).
* `dark-sky` - A Dark Sky API wrapper for Nodejs using method chaining and promises.

#### DevDependencies

* `eslint` - linting for javascript code
* `eslint-config-airbnb` - Airbnb's .eslintrc as an extensible shared config with peer dependencies: `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`

### Environment

* npm 6.4.1
* node v10.13.0

### Architecture of the backend

#### server.js

The backend handles these GET requests:
* /api/forecast/:longitude/:latitude
* /api/timemachine/:longitude/:latitude

In production (heroku demo) static assets will be served and any other GET requests will serve up the react frontend instead.

The handled requests have similar signatures:

1. Validate the request parameters.
2. Make one, or multiple, requests to the dark sky API.
3. Reduce the response from the API to a smaller set of data.
4. Return the response as JSON.
5. Should any errors occur:
  * A placeholder function is present to log the error on the server (I didn't make this).
  * A status code is set (400/422) and a JSON response is returned with an applicable error message.

#### Helpers

In the helpers folder I placed any functionality that could be reused across requests.

* `index` - The index helper holds general helper functionality
* `darksky-requester`- Because the requests I send to the Dark Sky API are so similar I used the DarkSkyRequester class to bundle that code.
* `darksky-cache` - The timemachine request fetches data in 30 separate requests from the Dark Sky API. To prevent it from having to do this multiple times for one user, the response is cached for one day.
* `errors` - Holds the error objects that are returned should any errors occur during the forecast or timemachine calls.

### About the react frontend

Read more about the frontend in [its own readme](client/README.md).
