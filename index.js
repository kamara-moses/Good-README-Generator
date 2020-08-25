const fs = require('fs');

const inquirer = require('inquirer');

const axios = require('axios');

const generateMarkdown = require('./utils/generateMarkdown.js')
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project Title?'
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the name of your repo?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'How do you describe your Project?.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Write instructions for using your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use',
        choices: [
            'MIT',
            'Apache 2.0',
            'GNU v3',
            'Mozilla Public License 2.0',
            'Unlicense'
        ]
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'What are the rules for contributing to this project?'
    },
    {
        type: 'input',
        name: 'authors',
        message: 'Who are the authors of this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run tests.'
    }
];
// function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName + '.md', data, error => error ? console.error(error) : console.log(`${fileName + '.md'} generated!`))
}

// function to initialize program
const init = () => {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        axios
          .get('https://api.github.com/users/' + answers.username)
          .then(response => {
            console.log(response);
            var imageURL = response.data.avatar_url;
            answers.image = imageURL;
            console.log(imageURL);
            fs.writeFile('README.md', generateMarkdown(answers), (err) => {
              if (err) {
                throw err;
              }
            });
          });
      });
}
// function call to initialize program
init();
