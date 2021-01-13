module.exports = (Factory, Person) => {
	let entity = Person;
	class PersonFactory extends Factory {
		constructor(subClassEntity) {
			if (subClassEntity) {
				entity = subClassEntity
			}
			super(entity);
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