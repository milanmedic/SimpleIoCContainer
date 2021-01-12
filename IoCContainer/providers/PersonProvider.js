const Factory = require('../../Factory');
const PersonFactory = require('../../PersonFactory');
const PersonModel = require('../../Person');

module.exports = container => {
	container.register('Factory', Factory);
	container.register('Person', PersonModel);
	container.factory('PersonFactory', PersonFactory);
};