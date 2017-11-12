AMY RAE FOX
amyraefox@gmail.com
@2017

Experimental Stimuli Codebase for 2YP - Scaffolding Unconventional Graphs - Study 3: Eye Tracking

SAMPLE URL FOR HEROKUAPP:

Notes
----------
Experimental Design:
Random assignment via condition condition code
SESSION CODE -> alphanumeric string chose by experimenter to indicate data collection SESSION
CONDITION CODE -> 3 digits
first digit: explicit scaffold
1 - control
2 - text/image
3 - interactive

second digit: implicit scaffold
1 - control
2 - impasse

third digit: grid format
1 - full orthogonal
2 - partial orthogonal
3 - diagonal

MANUALLY SET MIN, MAX AND RANGE IN GRAPHS.JS



Installation & Notes
------------------
https://github.com/Tuuleh/jsPsychBackendStart as reference
0 Requires node.js
------------------ RUNNING LOCAL ------------------
1. After download of files from github, run [ npm update ] to install node_modules
2. Check app.js file for proper configuration of local vs. hosted db information and server connections
3. Run local Mongodb    [ mongod in terminal ]
4. Start application [node app.js]
5. Navigate to localhost:3000
6. View database by running viewer (like RoboMongo)
------------------

Technical Notes
------------------
- jsPsych http://docs.jspsych.org/ library for structuring experiment
- d3 http://d3js.org/ for data visualization stimuli
- node.js
- express node runtime framework
- ejs template engine
- nodemon for reload
- Body-parser is middleware for Node.js that allows you to parse key-value data
- mongoose is a MongoDB driver for the Express framework
> thanks to https://github.com/Tuuleh/jsPsychBackendStart for boilerplate Mongo-Express-Node stack for db connectivity

Dev Notes
-------------------
> configure for local dev (check app.js file and un-comment local dev)
> for heroku deploy... setup new database on mlab
> setup new heroku application
> see https://github.com/Tuuleh/jsPsychBackendStart for reference
> see https://devcenter.heroku.com/articles/git for reference
> set mongo path in heroku with
heroku config:set CONNECTION = [mongolabs uri]
