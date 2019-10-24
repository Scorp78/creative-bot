const pack = require('../package.json');
let config = {};
const rxConfig = require('../helpers/rxConfig');
const fs = require('fs');
const getRandomInt = (max) => Math.floor(Math.random() * 100 + 1);
rxConfig.subscribe(data => (config = data));
const run = ({ message, args }) => {
  Promise.resolve(`@${message.sender.dliveUsername} has rolled a ${getRandomInt(20)}!`)
};

module.exports = {
  name: 'roll',
  run: run,
  description: 'provides a random number',
  permissions: {
    everyone: true
  }
};