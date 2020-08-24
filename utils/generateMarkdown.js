// function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  ## Badges
  ${data.license}
  # Project Title : ${data.title}
## Project Description:
${data.desc}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)
* [License](#license)
* [Author] (#Author)
* [Badges](#badges)
## Installation
${data.install}
## Usage
${data.usage}
## Contributors
${data.contributors}
## Test
${data.test}
## Questions
If you have any questions, contact ${data.username} on GitHub or my personal email ${data.email}.
## License
  ![MIT License](https://img.shields.io/badge/license-MIT-yellow.svg)
  ![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)
  ![GPLv3 License](https://img.shields.io/badge/license-GPL%20v3-yellow.svg)
  ![Public License](https://img.shields.io/badge/license-PDDL-brightgreen.svg)
  ![unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)
## Author 
![GitHub profile pic](${data.image})
`;
}

module.exports = generateMarkdown;
