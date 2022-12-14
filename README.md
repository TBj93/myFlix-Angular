# MyFlixAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.0.

Similar to the [React client](https://github.com/TBj93/myflix-client/tree/myflix-redux), this angular client fetches data from the mongoDB database on atlas and uses the API hosted on heroku to register user, login, get movie data etc. 
![img](https://github.com/TBj93/myFlix-Angular/blob/master/demo%20imgs/angular-demo.PNG?raw=true)


## Features

See [React client](https://github.com/TBj93/myflix-client/tree/myflix-redux)

## Some challenges I faced

I had to look thorugh the Angular documentation to solve a problem regarding data transfer between components. Found the Mat_dialog_data injections and solved it.
Also, I had no explicit function on my API hosted on heroku, for loading favmovies from a user. Besides adjusting that, I also updated my cors policies on the backend.

![img](https://github.com/TBj93/myFlix-Angular/blob/master/demo%20imgs/angular-demo2.PNG?raw=true)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

