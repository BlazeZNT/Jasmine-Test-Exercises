window.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("calc-form");
	if (form) {
		setupIntialValues();
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById("loan-amount").value,
		years: +document.getElementById("loan-years").value,
		rate: +document.getElementById("loan-rate").value,
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	const newInput = { amount: 10000, years: 3, rate: 1.5 };
	const newAmount = document.querySelector("#loan-amount");
	newAmount.value = newInput.amount;
	const newYears = document.querySelector("#loan-years");
	newYears.value = newInput.years;
	const newRate = document.querySelector("#loan-rate");
	newRate.value = newInput.rate;
	calculateMonthlyPayment(newInput);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	let currentValues = getCurrentUIValues();
	console.log(currentValues);
	let newVal = calculateMonthlyPayment(currentValues);
	console.log(calculateMonthlyPayment(currentValues));
	console.log(typeof calculateMonthlyPayment(currentValues));
	updateMonthly(newVal);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	let i = values.rate / 100 / 12;
	let n = Math.floor(values.years * 12);
	let quickMath = (values.amount * i) / (1 - Math.pow(1 + i, -n));
	return quickMath.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	const payment = document.querySelector("#monthly-payment");
	payment.innerText = monthly;
}
