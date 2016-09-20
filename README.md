# weather-demo

A 5 day weather forecast built in React and Redux. (http://weather-demo.pubstorm.site/)[http://weather-demo.pubstorm.site/]

The home page contains a weather widget that reads the weather for the next 5 days. It then allows the user to slide through the data and renders the main interest points.

## Build Status:

[![Build status](https://ci.appveyor.com/api/projects/status/bncfvior69hdf0je?svg=true)](https://ci.appveyor.com/project/hofnarwillie/weather-demo)


## Scripts:

* `npm start` - starts the development server in watch mode. This will compile, test and lint on any file changes.
* `npm run build` - builds the distribution output to the `./dist/` directory and starts a server.
* `npm run deploy` - deploys to a pubstorm account. You will need to be signed in to perform this deployment. Sign in with `storm login`. Login details in Keepass.

## TODO:

* Add HTTP mocking library to test async thunk actions.
* Add loading state to the "Refresh" button.
* Add a Details view that displays all the weather data.
* Fix the jumpy behaviour in the data table when the content doesn't have the same width.
* Customize Bootstrap using a bespoke SCSS/LESS build.
* Add some logic to handle invalid or missing data from the API.
* Add more unit tests.
* Ability to choose a different city from a list.
* Improve UI/UX with some icons/imagery.

## Links:

* Live Demo: (http://weather-demo.pubstorm.site/)[http://weather-demo.pubstorm.site/]
* Travis CI: https://travis-ci.org/hofnarwillie/weather-demo
* Appveyor: https://ci.appveyor.com/project/hofnarwillie/weather-demo