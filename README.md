# Introduction

Small demo of using TestCafe for a (fake) online banking website.

# Test Site

The tests are run against the following website: http://zero.webappsecurity.com/

# Installation

**npm install**

# To Run

There's a few test scripts set up in package.json to run different combinations of browsers and other options. Some basic ones are below.

Chrome (with HTML report generation):
**npm run test:chrome**

Chrome (with parallel execution):
**npm run test:chrome:parallel**

Chrome (with headless mode):
**npm run test:chrome:headless**

Chrome and Firefox (with headless mode):
**npm run test:multiple:headless**
