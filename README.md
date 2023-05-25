# ChatClient

This application uses Pusher websocket API with ASP.NET web API controller to create a real time chatroom.

Real time chatroom that will allow multiple users to enter and send messages using Websockets

# Requirements

* [x] Chatroom Ui for user to type a message and send for all users to see.
* [x] By pressing clicking on the send button the text will be displayed in the chat box alongside his username.
* [x] Timestamp when the user enters a new message in the chat under their message. 
* [x] USer will be prompted to login and the username will be stored.
* [x] User can see an input field where he can type a new message.
* [x] The messages will be visible to all the Users that are in the chat app (using WebSockets).
* [ ] Announce when a new user enters the chatroom.
* [ ] Hyperlink to display when user put a web link in a message.
* [ ] Add own icon image.

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
