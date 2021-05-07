// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.LicenseBadge}

  ## Description

  ${data.description}
  
    ## Table of Contents
  
    -[Description](#description)
    -[Installation](#installation)
    -[Usage](#usage)
    -[License](#license)
    -[Features](#features)
    -[Tests](#tests)
    -[Questions](#questions)
  
    ## Installation
  
      ${data.installation}
  
    ## Usage
  
      ${data.usage}
  
    ##License
  
      ${data.features}
  
    ##Contributing
  
      ${data.contributors}
  
    ##Tests
    
      ${data.tests}
  
    ##Questions 
  
      if you have questions contact at ${data.email}
      Pull request reguired from github.com/${data.username} 

`;
}

module.exports = generateMarkdown;
