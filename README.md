# team-profile-generator

# CLI Team Profile Generator

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

This application allows someone to quickly and efficiently build a html file of their team roster from their integrated command line in their code editor. I wanted to create this so that someone doesn't have to spend time setting this up for a team on a project by building a html file from scratch.

I learnt more about node.js, used constructors and extended constructors for the first time. I also got to practice using .filter, .map and .join which are things I haven't really had experience with before.
In addition to this I wrote tests for this application, the first of which I've written, to ensure each .js file in the lib folder was working. All tests ended up successfully passing!

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)
- [License](#license)

---

## Installation

You will need to clone the application from my GitHub account: https://github.com/RosemaryJF/team-profile-generator, to your local repository, and have Node.js installed on your code editor, if it isn't already.

Once cloned to the local repository the user will need to run `npm i` so that the necessary packages are installed on the application. From there you will be able to run the application in your intergrated terminal with the following command: `node index.js`.

Once the user has run `npm i`, they will have the required packages (inquirer and jest) available to run the application and the tests.

---

## Usage

Open index.js in the integrated terminal. Run node index.js

The console will then log the manager questions via inqurier. The user answers each question and then will choose what team member they would like add next. 
The next questions run will depend on what employee type the user has selected to add to the team. As the user finishes each round of questions their answers are stored as data.

Once the user has finished building their team through the console the can choose the following option: "
Once complete the new README file will appear on the side bar. The user is then free to edit the README as they wish and move it to where it is needed.

I would advise using this application to generate the README and then cutting it into the applicaple project/application for it, this will minimise unnessacry packages on your project.

The below link will take you through a walk through video of the application and it's functionality:

![Video Link](./assets/images/console-example.jpg)

---

## Features

A license badge is displayed to quickly provide a reference point at the top of the README. This is only generated if a license is chosen. The License section of the README will also only generate if a license is chosen. Otherwise it will render an empty string.

---

## License

This application is licensed under an [MIT license](https://github.com/RosemaryJF/team-profile-generator/blob/main/dist/LICENSE).

---

## Credits

* https://jestjs.io/docs/asynchronous

* https://fontawesome.com/docs/web/style/basics

* https://www.thecodingwalrus.com/js/javascript-for-loop-alternatives-2/

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push