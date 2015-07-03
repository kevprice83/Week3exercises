'use strict';




function decoder (words) {
	var secretMessage = '';
	words.forEach(function (word, index) {
		secretMessage += word.charAt(index % 5);

	})

	return secretMessage;
}

module.exports = decoder;

