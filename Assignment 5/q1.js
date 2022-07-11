const readlineSync = require("readline-sync");
// const person = {}
// person.name = readlineSync.question("What is your name : ");
// console.log(person);
let employee={
    // name: "Swaroop Pany",
    // email: "swaroop@gmail.com.com",
    // phoneNumber: 7606085751,
	// sal: 60000,	
	totalSal: function(){
		let hra = 0.15 * this.sal;
		let spa = 0.20 * this.sal;
		let tax;
		let total = this.sal + hra + spa;	
		if (total>40000 && total<50000){
			tax=0.10*this.sal;
		}
		else if (total>50000 && total<70000){
			tax=0.15*this.sal;
		}
		else if (total>70000){
			tax = 0.20*this.sal;
		}					
		let gross = total - tax;
		return gross;
	}
};
employee.name = readlineSync.question("What is your name : ");
employee.email = readlineSync.question("E-mail : ");
employee.phoneNumber = readlineSync.question("Enter your number : ");
employee.sal = readlineSync.question("Enter salary : ");
employee.sal = Number(employee.sal);

console.log(`Name : `+employee.name);
console.log(`E-mail : `+employee.email);
console.log(`Phone Number :`+employee.phoneNumber);
console.log(`Basic Salary : `+employee.sal);
let total = employee.totalSal();
console.log(`Total Salary : `+total);



