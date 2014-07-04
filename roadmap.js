function forecast_for_faculty(faculty_id) {
	if(faculty_id == "Computing") {
		var computingArray = [
			{
				"semester": 1,
				"modules": ["CS1101", "CS1102", "CS1103", "CS1104"]
			},
			{
				"semester": 2,
				"modules": ["CS1201", "CS1202", "CS1203", "CS1204"]
			},
			{
				"semester": 3,
				"modules": ["CS2101", "CS2102", "CS2103", "CS2104"]
			},
			{
				"semester": 4,
				"modules": ["CS2201", "CS2202", "CS2203", "CS2204"]
			},
			{
				"semester": 5,
				"modules": ["CS3101", "CS3102", "CS3103", "CS3104"]
			},
			{
				"semester": 6,
				"modules": ["CS3201", "CS3202", "CS3203", "CS3204"]
			},
		];
		return computingArray;
	}
}

function moduleDetails(module_code) {
	var arr = {
		"Code": module_code,
		"Description": "This is the description for " + module_code
	}
	return arr;
}