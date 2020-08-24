const licenseBadgeLinks = require('./licenseBadges');

// function to generate markdown for README
const generateMarkdown = (data) => {

  // set url for license badge
  data.licenseBadge = licenseBadgeLinks[data.license];

  return `
  ## Badges
  ${data.licenseBadge}
  # Project Title : ${data.title}
## Project Description:
${data.desc}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)
* [License](#license)
* [Author](#Author)
* [Badges](#badges)
## Installation
To install dependencies, run the following:
\`
${data.installation}
\`
## Usage
${data.usage}
## Contributors
${data.contributors}
## Test
To run tests, run the following:
\`
${data.tests}
\`

## Questions
If you have questions about this repository? Please contact me at [${data.email}](mailto:${data.email}). View more of my work in GitHub at [${data.username}](https://github.com/${data.username}).
## License
This repository is licensed under the ${data.license} license

Copyright (c) [2020] [Moses Kamara]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
## Author 
![GitHub profile pic](${data.image})
`;
}

module.exports = generateMarkdown;
