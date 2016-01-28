var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

function employeeSTIs(employees) {
	for (var i = 0; i < employees.length; i++) {
		console.log(arraySTI(employees[i]));
	}
}

function calcSTI(employee) {

	var employeeNum = employee[1];
	var annualIncome = parseInt(employee[2]);
	var rating = employee[3];

	var percentSTI = 0;

	switch(rating) {
		case 3:
			percentSTI = 4;
			break;
		case 4:
			percentSTI = 6;
			break;
		case 5:
			percentSTI = 10;
			break;
	}

	if (employeeNum.length == 4) {
		percentSTI += 5;
	}
	if (annualIncome > 65000) {
		percentSTI -= 1;
	}
	if (percentSTI > 13) {
		percentSTI = 13;
	}
	return percentSTI;
}

function arraySTI(employee) {
	var employeeName = employee[0];
	var employeeNum = employee[1];
	var annualIncome = parseInt(employee[2]);
	var rating = employee[3];

	var sTIPercent = calcSTI(employee);

	var adjustedAnnualComp = annualIncome + annualIncome * sTIPercent / 100;

	var totalBonus = Math.round(annualIncome * sTIPercent / 100);

	return [employeeName, sTIPercent, adjustedAnnualComp, totalBonus];
}

employeeSTIs(employees);