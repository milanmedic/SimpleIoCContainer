const { inject } = require('./utilities');
const container = require('./container').getContainer({ inject });

module.exports = (() => {
	require('./providers/PersonProvider')(container);
	return container;
})();