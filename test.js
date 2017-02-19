'use strict';

const path = require('path');
const cp = require('child_process');

const executable = path.join(__dirname, 'bin/.server');

const args = [];
const options = {};

options.stdio = ['inherit', 'inherit', 'inherit'];
// options.stdio = ['pipe', 'pipe', 'pipe'];
// options.stdio = ['ignore', 'ignore', 'ignore'];

const server = cp.spawn(executable, args, options);

server.on('error', err => {
    console.log('Failed to start child process.', err);
});

server.on('close', code => {
    console.log('Server process exited with code', code);
});