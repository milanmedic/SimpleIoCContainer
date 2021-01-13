module.exports = (PersonModel, sayHiInstance) => {
	const priv = new WeakMap();
	let protectedMems = {};
	const _ = function (instance) {
		return priv.get(instance);
	};

	class Student extends PersonModel {
		constructor(name, surname, age, id, studentId, prot) {
			super(name, surname, age, id, prot);
			this.studentId = studentId;
			this.sayHi = sayHiInstance.sayHi;
			protectedMems = prot;
			priv.set(this, { id: id });
		}
		showId() {
			return this.studentId
		}
	};

	return Student;
};

module.exports._injectables = ['Person', 'sayHiInstance']; //maybe specify in the name that we need the instance, for example, PersonInstance