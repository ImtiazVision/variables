const myVariable = 5;
console.log(myVariable);

function scope () {
	let local = 3;

	if(local) {
		let local = "This is a local variable";
		console.log("nested localVar: ", local);
	}

	console.log("local variable is: " , local);
}

scope();