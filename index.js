const container = require('./IoCContainer');

const personFactoryClass = container.get('PersonFactory');
const f = new personFactoryClass();
const personFactoryInstance = container.getInstance('PersonFactory');
const person = personFactoryInstance.create("John", "Doe", 24, "1133033");
console.log(person.showId());