'use strict';

var decoder = require('./decoder.js');




function super_decoder (words, type) {
	words =  words.split(' ');
	var options = type.split('-');

	if (options[1] === 'backwards') {
		words = words.reverse();
	}


	if  (options[0] ===  'odd') {
		words = words.filter(function(word, index) {
			return index % 2 === 1;
		});
	} 

	else if (options[0] === 'even') {
		words = words.filter(function(word, index) {
			return index % 2 === 0;
		});
	}

	return decoder(words);
}


module.exports = super_decoder;