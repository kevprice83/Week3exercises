'use strict';

var sentences = require('./sentences.js')

var super_decoder = require('./super_decoder.js');

sentences.forEach(function (sentence) {
	console.log(super_decoder(sentence,'every-forwards'));
})

