# ReactJS

# Parcel
- Bundler used to build and host
- Dev Build
- Local Server
- HMR= Hot Module Repalcement 
- File watching Algorithm - written in C++ for Automatic Refresh
- Caching every change - for faster builds
- Image optimization
- Minification
- Compressing
- Consistent hashing
- Code splitting
- Differential Bundling - support old browsers
- Diagnostics
- Error handling
- can host in https instead of http
- Tree Shaking
- Different dev and production bundlers

-----------
## Package.json
>Package.json is a configuration file for npm which maintains all the dependencies. This file focuses on project metadata and specifying the desired versions of dependencies

command: `npm init` is used to initialize the project

------

## Bundler

>Bundler: It is a tool that takes all JS code along with other assets like CSS/Images etc and combines into single file that can be served to browser

There are different bundlers in React like Webpack, Parcel, Vite

Command to install parcel Bundler: npm install -D parcel

> A dependency is just a package that your project uses 2 types of dependencies: devDependencies and Dependencies 
  1) devDependencies required for developing phase and testing
  2) Dependencies are also used in production phase

>Parcel is a bundler which fetches the dependencies from the npm repository.

In package.json
```sh
  "devDependencies": {
    "parcel": "^2.10.3"
  }
```
 `Major.Minor.Patch`

  `2.8.3`

>^(caret) ^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.

>~(tilde) ~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

----

  After installing parcel, package-lock.json is created.

>package-lock.json: keeps track of the exact version of dependencies that is being installed. 
So if the app is working in local and might have issues in the production. 
So to have exact same version of dependencies in production. 
package-lock.json ensures the same dependencies are being used in production also.

>node_modules is directory  where it tracks and store dependencies locally via package.json.

>Transitive dependencies: It is not imported directly into project but it is needed to be imported by another direct dependency we need.
-> If we dig deep into the node_modules, we can find package.json for almost all the packages. This is Transitive dependency.

**NOTE**
We shouldn't add node_modules to Github

>Create .gitignore and add /node_modules to be ignored by Git

**NOTE**
Don't add package.json and package-lock.json in .gitignore

>If you have your package.json, we can create our node_modules and dependencies again by using " npm install " command. 
So don't need to add node_modules. They will be downloaded when we install any package

>To run app use command: 
```sh
npx parcel index.html
```
npx means executing a package
npm means installs a package
Parcel runs on server in localhost:1234
Parcel build the project and hosts locally

**NOTE**
CDN (Content Delivery Network) way of creating ReactJS web app is not recommended.

>Instead install react locally using  command: ```sh
npm install react
```

>To add react and react-dom dependencies into project
commands:
```sh
  node_modules: npm install or npm i
  react: npm install react or npm i react
  react-dom: npm install react-dom or npm i react-dom
```
---------------------------------------------------------------
>Normal JavaScript doesn't have import keyword. So we can't use react with `<script src="App.js">` tag. 

## Parcel is used for:
  - Dev build
  - Local server
  - HMR= Hot Module Repalcement
  - File watching Algorithm - written in C++ for Automatic Refresh
  - creates Cache - for faster builds
  - image optimization - Minification and bundles it
  - Compressing
  - Consistent Hasing (read about it)
  - Differential Bundling - support old browsers
  - Code splitting
  - Diagnostics
  - Error handling
  - can host in https instead of http
  - Tree Shaking - remove unused code for use

>If you want to run your React App in prod then 
use command: 
```sh
npx parcel build index.html
```
>This will run into error, as the package.json has "main":"App.js". 
It searches for index.html and doesn't find in package.json. 
So throws error. Remove "main" object.

When using command: 
```sh
npx parcel index.html
```
A "dist' folder is created

>When we execute parcel, it generates a development project build it creates a folder "dist" and puts those files there.
When we make changes, it uses parcel cache and dist to update it faster using Hot Module Repalcement (HMR)

>We can ignore dist and .parcel-cache folders for gitignore

In package.json,
```sh
  "browserslist":{
    "last 2 Chrome versions"
  }
  ```
>We can make our last 2 versions of chrome to be compatable.