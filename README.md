# CignaProjectApp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## NOTE FOR UPDATE TO ANGULAR9!! 
## IF ERROR OCCURS:
    ERROR in node_modules/@angular/common/http/http.d.ts:81:22 - error NG6002: Appears in the NgModule.imports of AppModule, but could not be resolved to an NgModule class.

    This likely means that the library (@angular/common/http) which declares HttpClient has not been processed correctly by ngcc, or is not compatible with Angular Ivy. Check if a newer version of the library is available, and update if so. Also consider checking with the library's authors to see if the library is expected to be compatible with Ivy.

    81 export declare class HttpClient {

## ADD FOLLOWING TO tsconfig##
>> "enableIvy": false

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
