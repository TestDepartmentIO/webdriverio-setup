# webdriverio-setup

### Commands
All commands should be run from root of the project

#### Initialise the project
1. `npm init --yes`

#### Install WebdriverIO as a dependency
2. `npm install --save webdriverio`

#### Set up project
3. `./node_modules/.bin/wdio`

__You will be presented with a few questions to guide you through setting up the project. Press enter to confirm your answers__

Use arrow keys if neccessary to move to required options advised below

Q: Where do you want to execute your tests?
A: __On my local machine__ 

Q: Which framework do you want to use?
A: __mocha__

Q: Shall I install the framework adapter for you?
A: __Yes__ (just press enter as Yes is default)

Q: Where are your test specs located?
A: __./test.js__ 

Q: Which reporter do you want to use?
A: __spec__ (move to spec in the list, press spacebar to select checkbox and then enter)

Q: Shall I install the reporter library for you?
A: __Yes__ (just press enter as Yes is default)

Q: Do you want to add a service to your test setup?
A: __selenium-standalone__ (move to selenium-standalone in the list, press spacebar to select checkbox and then enter)

Q: Level of logging verbosity:
A: __silent__

Q: In which directory should screenshots gets saved if a command fails?
A: __./errorShots/__ (just press enter)

Q: What is the base url?
A: __http://bing.com__ (change the base url and press enter)

#### Run tests
4. `./node_modules/.bin/wdio`