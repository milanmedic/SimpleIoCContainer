const Factory = require('../../Factories/BaseFactory');
const PersonFactory = require('../../Factories/PersonFactory');
const PersonModel = require('../../Models/PersonModel');

module.exports = container => {
	container.register('Factory', Factory);
	container.register('Person', PersonModel);
	container.factory('PersonFactory', PersonFactory);
};