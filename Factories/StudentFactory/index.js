module.exports = (PersonFactory, Student) => {
	let entity = Student;
	class StudentFactory extends PersonFactory {
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
		create(name, surname, age, id, studentId) {
			return new this.entity(name, surname, age, id, studentId);
		}
	}

	return StudentFactory;
}

module.exports._injectables = ['PersonFactory', 'StudentModel']; 