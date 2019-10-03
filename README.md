# dicty-components-header-footer

[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](LICENSE)  
![GitHub action](https://github.com/dictyBase/dicty-components-header-footer/workflows/Node%20CI/badge.svg)
[![Dependency Status](https://david-dm.org/dictyBase/dicty-components-header-footer/develop.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-header-footer/develop)
[![devDependency Status](https://david-dm.org/dictyBase/dicty-components-header-footer/develop/dev-status.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-header-footer/develop?type=dev)
![GitHub tag](https://img.shields.io/github/v/tag/dictyBase/dicty-components-header-footer)  
![Commits](https://badgen.net/github/commits/dictyBase/dicty-components-header-footer/develop)
![Last commit](https://badgen.net/github/last-commit/dictyBase/dicty-components-header-footer/develop)
![Branches](https://badgen.net/github/branches/dictyBase/dicty-components-header-footer)
![Tags](https://badgen.net/github/tags/dictyBase/dicty-components-header-footer)
![GitHub repo size](https://img.shields.io/github/repo-size/dictyBase/dicty-components-header-footer?style=plastic)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dictyBase/dicty-components-header-footer?style=plastic)
[![Lines of Code](https://badgen.net/codeclimate/loc/dictyBase/dicty-components-header-footer)](https://codeclimate.com/github/dictyBase/dicty-components-header-footer/code)  
![Issues](https://badgen.net/github/issues/dictyBase/dicty-components-header-footer)
![Open Issues](https://badgen.net/github/open-issues/dictyBase/dicty-components-header-footer)
![Closed Issues](https://badgen.net/github/closed-issues/dictyBase/dicty-components-header-footer)
![Total PRS](https://badgen.net/github/prs/dictyBase/dicty-components-header-footer)
![Open PRS](https://badgen.net/github/open-prs/dictyBase/dicty-components-header-footer)
![Closed PRS](https://badgen.net/github/closed-prs/dictyBase/dicty-components-header-footer)
![Merged PRS](https://badgen.net/github/merged-prs/dictyBase/dicty-components-header-footer)  
[![Technical debt](https://badgen.net/codeclimate/tech-debt/dictyBase/dicty-components-header-footer)](https://codeclimate.com/github/dictyBase/dicty-components-header-footer/trends/technical_debt)
[![Issues](https://badgen.net/codeclimate/issues/dictyBase/dicty-components-header-footer)](https://codeclimate.com/github/dictyBase/dicty-components-header-footer/issues)
[![Maintainability percentage](https://badgen.net/codeclimate/maintainability-percentage/dictyBase/dicty-components-header-footer)](https://codeclimate.com/github/dictyBase/dicty-components-header-footer)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=dictyBase/dicty-components-header-footer)](https://dependabot.com)  
[![Funding](https://badgen.net/badge/NIGMS/Rex%20L%20Chisholm,dictyBase/yellow?list=|)](https://projectreporter.nih.gov/project_info_description.cfm?aid=9476993)
[![Funding](https://badgen.net/badge/NIGMS/Rex%20L%20Chisholm,DSC/yellow?list=|)](https://projectreporter.nih.gov/project_info_description.cfm?aid=9438930)

This is a React library for displaying the header and footer in all dictyBase web applications.

## Install

`npm i dictyBase/dicty-components-header-footer`

For a particular version(checks tags/release first)  
 `npm i dictyBase/dicty-components-header-footer#v1.0.0`

## Usage and documentation

`import {Header, Footer} from "dicty-components-header-footer`

Documentation of `Header` is [here](https://dictybase.github.io/dicty-components-header-footer/#!/Header).  
Documentation of `Footer` is [here](https://dictybase.github.io/dicty-components-header-footer/#!/Footer).

## Development

- Clone the `develop` branch of this repository
- Run `npm install`
- Create a feature branch (feature/foo) or `bug/foo` or `documentation/foo` or
  `refactor/foo`, whatever suits the purpose of development
- To run a demo during development  
  `npm run start`
- Write tests in the same folder as the component.
- At the end of development, `npm run test:run` should pass.
- Write documentation using `styleguidist` and build it using `npm run styleguide:build`.
- Run `npm run build` to generate the library.
- Commit all the changes and either merge to develop or send a pull request.

## Semantic Versioning

This app has been set up to use [semantic-release](https://github.com/semantic-release/semantic-release)
and [commitizen](https://github.com/commitizen/cz-cli). After adding a new commit
(`git add ...`), use `npm run cz` and follow the prompts to categorize and provide
more details about your commit. Once complete, push your changes to whatever branch
you are working on.

When you are ready to push to prod, you can use `semantic-release` to automate the
release process:

- Merge your changes into `master`
- Run `npx semantic-release`

**Important:** you MUST have an env variable stored for `GH_TOKEN` or `GITHUB_TOKEN`
that contains a GitHub [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/).
You can either pass this in manually when you run the script (i.e. `GH_TOKEN=XXX npx semantic-release`)
or you can [store your env variable locally](https://www.schrodinger.com/kb/1842).

This will look at your most recent commits since the last `git tag` and automatically
determine the appropriate version number for your release.
