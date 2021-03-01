# TodoList Project

## Overview
For this project, you will be re-writing an application that displays a list of todo items for a user.
This assignment will test whether you can engineer re-usable React components and follow the 
hooks-API paradigm.
The formatting for each todo-list item, the CSS for the page, and an example HTTP request from 
the front-end has been provided for you. There are also react-warnings that you will need to fix.

## Learning Objectives
1. Student should be able to create a re-usable component that accepts/uses props correctly.
2. Student should be able to read and understand documentation for a REST API.
3. Student should be able to use a REST API to deliver and receive information.
4. Student should be able to use Axios to interact with a REST API.
5. Student should be able to follow a code-style guide that has been given to them.
6. Student should be able to create a hook for receiving information from an API.
7. Student should be able to create a form that prevents invalid data to be inputted on the user-side.
8. Student should be able to create components that use live-API data instead of pre-written, hard-coded data.
9. Student should be able to use, create, and manipulate JSON data.
10. Student should be able to add an NPM library.
11. Student should be creating readable and maintainable code.
12. Student should be able to create a branch separate from the main repository branch.
13. Student should be able to create a pull-request to a Github repository.

## Turn-In

### The Files you will need edit/submit
1. `src/components/[YOUR-REUSABLE-COMPONENTS]*`
2. `src/hooks/useItems.js`
3. `src/App.js`

### Turn-In Process
Once you are ready to submit, create a new branch with your code inside of it and create a pull-request of that branch.

## Requirements

1. Code should follow style-guide described below.
2. Any components created should only take in the props necessary.
3. No-unnecessary API requests should be made.
4. Forms must have HTML validation and form errors should be displayed to the user.
5. No-unnecessary NPM libraries should be added.
6. No-unnecessary files should be pushed to the repository.
7. No direct pushes should be made to repository, only pull-requests.
8. All components should be functional-based, no class-based components.
9. **Every** function **must** have a JSDOC comment.
10. Any bootstrap components should be created using the 
[React-Bootstrap wrapper](https://react-bootstrap.github.io/).
11. There should be **0** warnings or errors or `console.log`'s reported to the console. 
(It is fine to have them during development but not when you have turned-in your code.)
12. The formatting for the date must fit `MONTH DAY, YEAR` (Ex. January 21, 2021).
13. Form submission should only occur if the form-validation has passed.

## Development Strategy
1. The project has a live API at `Todolistapi-env.eba-prw3zew9.us-east-2.elasticbeanstalk.com`. 
However, the front-end is not using the live data. Create an API file under the `api` folder that 
uses axios that the rest of your application can use. (Hint: Use the API folder inside of the CMS 
project as a reference and read the API documentation under the `doc` folder to learn how to use 
this particular API).

2. Once you have converted the application to be functional-based. Create a hook called `useItems`
that uses your API file to get the live Todo-List information and returns it.

3. Once you have created the `useItems` hook, use the live data from it to render the todo-list items.

4. Now that you have access to the API data inside of `App.js` create a re-usable component that 
represents each todo-list item and use it inside of `App.js`.

5. Finally, create a component that represents a modal that opens up whenever the user has clicked 
on the `Create Item` button. The modal should contain a form using [formik](formik.org/).


## Hints
Formik has a really great tutorial that guides you through how to use formik and how to display errors.

## Extra Credit Feature

What happens if our API is down? How can the user know that an error has occurred with our API?
Create an alert that gets displayed to the user temporarily (It must go away after 3 seconds.)
(Hint: Google `setTimeout` and look at the Alert component under Bootstrap)

## Code Style Rules
1. Lines should not go over 100 characters
2. Indents should be made with 3 spaces, not tabs. (Hint: You can force VSCODE to use 3-spaces instead of tabs and use Tab like normal.)
