const Factory = require('../../Factories/BaseFactory');
const StudentFactory = require('../../Factories/StudentFactory');
const StudentModel = require('../../Models/StudentModel');

module.exports = container => {
	container.register('Factory', Factory);
	container.registerInstance('sayHi', { sayHi: function () { console.log('Hello') } });
	container.factory('Student', StudentModel);
	container.factory('StudentFactory', StudentFactory);
};