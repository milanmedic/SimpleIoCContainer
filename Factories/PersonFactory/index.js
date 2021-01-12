module.exports = (Factory, Person) => {
	class PersonFactory extends Factory {
		constructor() {
			super(Person);
		}
		/**
		 * 
		 * @param {string} name 
		 * @param {string} surname 
		 * @param {number} age 
		 * @param {string} id 
		 */
		create(name, surname, age, id) {
			return new this.entity(name, surname, age, id);
		}
	}

	return PersonFactory;
}

module.exports._injectables = ['Factory', 'Person'];