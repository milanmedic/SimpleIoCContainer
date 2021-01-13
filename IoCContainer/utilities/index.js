function inject(container, factory) {
	let args = parseArguments(factory);
	if (!args && !factory._injectables) {
		throw new Error(`No dependencies listed for Factory ${factory}`);
	}
	if (!args || args.toString() != factory._injectables.toString()) {
		args = factory._injectables;
	}
	const factoryArguments = args.map(dependency => {
		let instanceRegex = /Instance/;
		let modelRegex = /Model/;
		let a = dependency.match(instanceRegex)
		if (dependency.match(instanceRegex)) {
			return container.getInstance(dependency.split('Instance')[0]);
		}
		else if (dependency.match(modelRegex)) {
			return container.get(dependency.split('Model')[0]);
		} else {
			return container.get(dependency);
		}
	});
	return factory.apply(null, factoryArguments);
};

function parseArguments(func) {
	// String representaation of the function code 
	var str = func.toString();

	// Remove comments of the form /* ... */ 
	// Removing comments of the form // 
	// Remove body of the function { ... } 
	// removing '=>' if func is arrow function  
	str = str.replace(/\/\*[\s\S]*?\*\//g, '')
		.replace(/\/\/(.)*/g, '')
		.replace(/{[\s\S]*}/, '')
		.replace(/=>/g, '')
		.trim();

	// Start parameter names after first '(' 
	var start = str.indexOf("(") + 1;

	// End parameter names is just before last ')' 
	var end = str.length - 1;

	var result = str.substring(start, end).split(", ");

	var params = [];

	result.forEach(element => {

		// Removing any default value 
		element = element.replace(/=[\s\S]*/g, '').trim();

		if (element.length > 0)
			params.push(element);
	});

	return params;
};

module.exports = {
	inject,
	parseArguments
};