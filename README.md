# dicty-components-header-footer

[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](LICENSE)  
![GitHub tag](https://img.shields.io/github/v/tag/dictyBase/dicty-components-header-footer)  
![GitHub action](https://github.com/dictyBase/dicty-components-header-footer/workflows/Testing/badge.svg)
[![codecov](https://codecov.io/gh/dictyBase/dicty-components-header-footer/branch/develop/graph/badge.svg)](https://codecov.io/gh/dictyBase/dicty-components-header-footer)  
[![Dependency Status](https://david-dm.org/dictyBase/dicty-components-header-footer/develop.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-header-footer/develop)
[![devDependency Status](https://david-dm.org/dictyBase/dicty-components-header-footer/develop/dev-status.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-header-footer/develop?type=dev)  
[![Technical debt](https://badgen.net/codeclimate/tech-debt/dictyBase/dicty-components-header-footer)](https://codeclimate.com/github/dictyBase/dicty-components-header-footer/trends/technical_debt)
[![Issues](https://badgen.net/codeclimate/issues/dictyBase/dicty-components-header-footer)](https://codeclimate.com/github/dictyBase/dicty-components-header-footer/issues)
[![Maintainability percentage](https://badgen.net/codeclimate/maintainability-percentage/dictyBase/dicty-components-header-footer)](https://codeclimate.com/github/dictyBase/dicty-components-header-footer)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=dictyBase/dicty-components-header-footer)](https://dependabot.com)  
![Issues](https://badgen.net/github/issues/dictyBase/dicty-components-header-footer)
![Open Issues](https://badgen.net/github/open-issues/dictyBase/dicty-components-header-footer)
![Closed Issues](https://badgen.net/github/closed-issues/dictyBase/dicty-components-header-footer)
![Total PRS](https://badgen.net/github/prs/dictyBase/dicty-components-header-footer)
![Open PRS](https://badgen.net/github/open-prs/dictyBase/dicty-components-header-footer)
![Closed PRS](https://badgen.net/github/closed-prs/dictyBase/dicty-components-header-footer)
![Merged PRS](https://badgen.net/github/merged-prs/dictyBase/dicty-components-header-footer)  
![Commits](https://badgen.net/github/commits/dictyBase/dicty-components-header-footer/develop)
![Last commit](https://badgen.net/github/last-commit/dictyBase/dicty-components-header-footer/develop)
![Branches](https://badgen.net/github/branches/dictyBase/dicty-components-header-footer)
![Tags](https://badgen.net/github/tags/dictyBase/dicty-components-header-footer)
![GitHub repo size](https://img.shields.io/github/repo-size/dictyBase/dicty-components-header-footer?style=plastic)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dictyBase/dicty-components-header-footer?style=plastic)
[![Lines of Code](https://badgen.net/codeclimate/loc/dictyBase/dicty-components-header-footer)](https://codeclimate.com/github/dictyBase/dicty-components-header-footer/code)  
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
- Create a new branch (i.e. `feature/foo-plugin`)
- Complete any necessary work.
- If creating a new plugin, there is a [guide](./documentation/bold.md) that
  walks you through the process using the bold plugin as a guide.
- Commit all changes and open a pull request. If all checks pass, it is ready
  to merge to `develop`.

If you are ready to cut a new release, you can then merge into `master`. This
will trigger a GitHub Action that uses `semantic-release` to create a new tag
automatically.
