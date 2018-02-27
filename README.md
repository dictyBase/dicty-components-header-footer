# dicty-components-header-footer

[![Travis][build-badge]][build]
[![Coveralls][coveralls-badge]][coveralls]
[![dependencies Status](https://david-dm.org/dictyBase/dicty-components-header-footer/status.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-header-footer)
[![devDependencies Status](https://david-dm.org/dictyBase/dicty-components-header-footer/dev-status.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-header-footer?type=dev)
[![peerDependencies Status](https://david-dm.org/dictyBase/dicty-components-header-footer/peer-status.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-header-footer?type=peer)

React components for displaying header and footer in all dictyBase web applications.

## Install
  ```npm i dictyBase/dicty-components-header-footer --save```

  For a particular version(checks tags/release first)  
  ```npm i dictyBase/dicty-components-header-footer#v1.0.0 --save```

## Usage and documentation
```import {Header, Footer} from "dicty-components-header-footer``` 

Documentation of `Header` is [here](https://dictybase.github.io/dicty-components-header-footer/#!/Header).  
Documentation of `Footer` is [here](https://dictybase.github.io/dicty-components-header-footer/#!/Footer).  


## Development
+ Clone the `develop` branch of this repository  
+ Run `npm install`  
+ Create a feature branch(feature/foo) or `bug/foo` or `documentation/foo` or
  `refactor/foo`, whatever suits the purpose of development  
+ To run a demo during development  
  ```npm run start```
+ Write tests in the same folder as the component. Snapshot testing is recommended.  
+ At the end of development, ```npm run test:run``` should pass.  
+ Write documentation using `styleguidist` and build it using ```npm run styleguide:build```.  
+ Run ```npm run build``` to generate the library.  
+ Commit all the changes and either merge to develop or send a pull request.

## Tagging
+ Run `git tag -a v1.0.0 -m "version 1.0.0"` where the version number is the one that needs to be updated
+ Push tag to branch, i.e. `git push origin v1.0.0`

[build-badge]: https://travis-ci.org/dictyBase/dicty-components-header-footer.svg?branch=develop
[build]: https://travis-ci.org/dictyBase/dicty-components-header-footer

[coveralls-badge]: https://coveralls.io/repos/github/dictyBase/dicty-components-header-footer/badge.svg?branch=develop
[coveralls]: https://coveralls.io/github/dictyBase/dicty-components-header-footer?branch=develop
