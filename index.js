const { randomInt } = require('crypto');
const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './README.md';

const func = async function() {
   
            var DATE = moment().subtract(17, 'd').format();
            await simpleGit().add([FILE_PATH]).commit('fixed a bug ', {'--date': DATE}).push();
        }  

func();
