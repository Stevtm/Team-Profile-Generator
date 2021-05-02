# Team Profile Generator

This application allows the user to easily generate a website that displays information for all team members. Team information is entered through a series of prompts in the command line.

## Application Functionality

The application is able to perform the following functions:

- Prompt the user to enter information about all team members.
  - Allow the user to add information for one Manager, inluding:
    - Name
    - Role
    - ID
    - Email
    - Office Number
  - Allow the user to add information for unlimited Engineers, including:
    - Name
    - Role
    - ID
    - Email
    - GitHub username
  - Allow the user to add information for unlimited Interns, including:
    - Name
    - Role
    - ID
    - Email
    - School
- Generate an HTML file based on the user input with each employee displayed as a card.

## Video Demonstration

The following video shows a demonstration of the application being used to create a web page!

https://youtu.be/ntHcE0QXm0M

## Installation

To use this application, you will need to have Node.js installed.
To install the application:

1. Fork the repository
2. Execute `npm install`
3. Execute `npm test` and ensure that all tests are passed

## Usage

To use this application:

1. Execute `node index.js`
2. Answer the questions as they are prompted in the console
3. Enjoy the generated webpage in the `dist/` folder!

## References

- Bootstrap CDN: https://getbootstrap.com/
- Node.js: https://nodejs.org/en/
- Inquirer.js: https://www.npmjs.com/package/inquirer#prompt
- Jest: https://www.npmjs.com/package/jest
