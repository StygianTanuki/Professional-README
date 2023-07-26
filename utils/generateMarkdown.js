// Creates a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return "";
}

// Creates a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `- [License](#license)`;
  }
  return "";
}

// Creates a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License`;
  }
  return;
}

// Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Features](#features)
  - [Usage](#usage)
  - [Installation](#install)
  - [Contribute](#contribute)
  - [Links](#links)
  - [Questions](#questions)

  ## Features
  ${data.features}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.install}

  ## How to Contribute
  ${data.contribute}

  ## Links
  ${data.links}

  ## Questions
  
  E-Mail: ${data.email}

  Repo: [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
