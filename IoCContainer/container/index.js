class Container {
	constructor(utilities) {
		this.dependencies = {};
		this.factories = {};
		this.singletons = {};
		this.utilities = utilities;
	}
	/**
	 * 
	 * @param {string} name 
	 * @param {function} factory 
	 */
	factory(name, factory) {
		this.factories[name] = factory;
	}
	/**
	 * 
	 * @param {string} name 
	 * @param {function} dependency 
	 */
	register(name, dependency) {
		this.dependencies[name] = dependency;
	}

	registerInstance(name, dependency) {
		this.singletons[name + 'Instance'] = dependency;
	}
	/**
	 * 
	 * @param {string} name 
	 */
	get(name) {
		if (!this.dependencies[name]) {
			const factory = this.factories[name];
			this.dependencies[name] = factory && this.utilities.inject(this, factory);
			if (!this.dependencies[name]) {
				throw new Error(`Cannot find module: ${name}`);
			}
		}
		return this.dependencies[name];
	}
	/**
	 * 
	 * @param {string} name 
	 * @param {string} newName
	 */
	getInstance(name, newName = "") {
		if (!this.singletons[name + 'Instance']) {
			const factory = this.get(name);
			const manufacturedInstance = new factory();
			if (newName) {
				name = newName;
			}
			this.singletons[name + 'Instance'] = manufacturedInstance;
		}
		return this.singletons[name + 'Instance'];
	}
};

let instance = null;

module.exports = {
	getContainer: (utilities) => {
		if (!instance) {
			instance = new Container(utilities);
			// Hide the constructor so the returned object can't be new'd...
			instance.constructor = null;
		}
		return instance;
	}
}

