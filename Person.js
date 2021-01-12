module.exports = (function Person() {

	const priv = new WeakMap();
	let protectedMems = {};
	const _ = function (instance) {
		return priv.get(instance);
	};

	class Person {
		constructor(name, surname, age, id, prot) {
			this.name = name;
			this.surname = surname;
			this.age = age;
			protectedMems = prot;
			priv.set(this, { id: id });
		}
		showId() {
			return _(this).id
		}
	};

	return Person;
}());