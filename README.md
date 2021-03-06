# Hand Things Over - page for donating things
#### Project is still in progress 👩‍🔧
* [General info](#general-info)
* [Source](#source)
* [Tech](#tech)
* [Setup](#setup)
* [Todos](#todos)


## General info

Hand Things Over is a website with a simple form that will make it easier for users to donate items.
The aim of this project is to create a place where everyone can donate unnecessary things to trusted institutions.

## Source
This project is based on prototype "Oddam w dobre ręce" in Adobe XD prepared by Magda - graduate of [Coders Lab](https://coderslab.pl) UX course.

The design was created for screens with 1900px width or wider.

## Tech

This project uses a number of open source projects to work properly:

* [Create React App](https://github.com/facebook/create-react-app)
* [Sass](https://sass-lang.com/) - for styles
* [React Router](https://github.com/ReactTraining/react-router) - for routing
* [React Scroll](https://github.com/fisshy/react-scroll) -  for animating vertical scrolling
* [React App Rewired](https://github.com/timarney/react-app-rewired) and [Customize-CRA](https://github.com/arackaf/customize-cra) - to override create-react-app webpack configs without ejecting
* [React Visibility Sensor](https://github.com/joshwnj/react-visibility-sensor) - Sensor component for React that notifies you when it goes in or out of the window viewport
* [Firebase](https://firebase.google.com) - authentication with email address and password, Realtime Database

## Live Demo
[DEMO](https://dominikaozorkiewicz.github.io/Hand_Things_Over)

Use login and password to test all functionality or register your own user.

```
login: test@test.test
password: 123456
```

## Setup
To run this project, install it locally using npm:

```
$ cd ../Hand_Things_Over
$ npm install
```

To run this project correctly, you need to connect it with Firebase:
* Create Firebase account or sign in using Google account
* Connect project with Firebase. If you don't know what to do, don't worry! [Firebase documentation](https://firebase.google.com/docs) will help you
* Add new file with your Firebase configuration in this path: `src/services/firebaseConfig.js`

```
// firebaseConfig.js
export const firebaseKey = "YOUR_DATA";
export const firebaseDomain = "YOUR_DATA";
export const firebaseDatabase = "YOUR_DATA";
export const firebaseProjectID = "YOUR_DATA";
export const firebaseStorageBucket = "YOUR_DATA";
export const firebaseSenderID = "YOUR_DATA";
export const firebaseAppID = "YOUR_DATA";
```

Great! Project is ready to run!🚀
```
$ npm start
```

## Todos

 - Completing the form for donating items ✔
 - Linking the completed form with the user's account ✔
 - User panel 🔧
 - Version for mobile devices
 
 ## Preview
 
 ![Hand Things Over preview](preview/landing-page.png)
 


