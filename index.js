// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;          
            
        } else {
            console.log ('You need to enter a title to continue!');
            return false;
        }
        }

        
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide installation info to continue')
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute to this project ');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project? (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to describe how to test')
                return false;
            }
        }
    
    },
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose which license for this project (Required)',
        choices: ['MIT', 'Apache', 'Mozilla-Public', 'GNU', 'Common Development','None'],
        validate: licesningInput => {
            if (licesningInput) {
                return true;
            } else {
                console.log('You must pick one');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your Github Username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Add Email'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Add anyone who contributed'
    }




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to the ReadMe')  
    });
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (UserInput) {
        console.log(UserInput)
        writeToFile("README.md", generateMarkdown(UserInput));
    });
};

init();
