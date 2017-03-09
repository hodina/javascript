// This file contains CommonJS and ES5, it is not transpiled

// Register babel to treanspile before our test run
require('babel-register');

// disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
