# webdriverio-setup

### Commands
All commands should be run from root of the project

#### Initialise the project
1. `npm init --yes`

#### Install WebdriverIO as a dependency
2. `npm install --save webdriverio`

#### Set up project
3. `./node_modules/.bin/wdio`

__You will be presented with a few questions to guide you through setting up the project. Press enter to confirm your answers. Use spacebar to select checkbox/radio option__

Use arrow keys if neccessary to move to required options advised below

| Question                                                             | Answer              |
| :------------------------------------------------------------------: | :-----------------: |
| Where do you want to execute your tests?                             | On my local machine |
| Which framework do you want to use?                                  | mocha               |
| Shall I install the framework adapter for you?                       | Yes                 |
| Where are your test specs located?                                   | ./test.js           |
| Which reporter do you want to use?                                   | spec                |
| Shall I install the reporter library for you?                        | Yes                 |
| Do you want to add a service to your test setup?                     | selenium-standalone |
| Level of logging verbosity:                                          | silent              |
| In which directory should screenshots gets saved if a command fails? | ./errorShots/       |
| What is the base url?                                                | http://bing.com     |

#### Run tests
1. `./node_modules/.bin/wdio`