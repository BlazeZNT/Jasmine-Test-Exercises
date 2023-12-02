// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
	let total = 0;
	for (let key in allPayments) {
		let payment = allPayments[key];

		total += Number(payment[type]);
	}

	return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
	return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
	let newTd = document.createElement("td");
	newTd.innerText = value;

	tr.append(newTd);
}

function appendServerDeleteBtn(tr) {
	let newTd = document.createElement("td");
	newTd.className = "delBtn";
	newTd.innerText = "X";
	newTd.addEventListener("click", function (event) {
		let newtar = event.target.closest("tr");
		delete allServers[newtar.id];
		event.target.parentElement.remove();
		updateServerTable();
	});
	tr.append(newTd);
}

function appendServerDeleteBtn(tr) {
	let newTd = document.createElement("td");
	newTd.className = "delBtn";
	newTd.innerText = "X";
	newTd.addEventListener("click", function (event) {
		let newtar = event.target.closest("tr");
		delete allServers[newtar.id];
		event.target.parentElement.remove();
		updateServerTable();
	});
	tr.append(newTd);
}

// function appendPaymentDeleteBtn(tr) {
// 	let newTd = document.createElement("td");
// 	newTd.className = "delSerBtn";
// 	newTd.innerText = "X";
// 	newTd.addEventListener("click", function (event) {
// 		let newtar = event.target.closest("tr");
// 		paymentId -= 1;
// 		delete allPayments[newtar.id];
// 		event.target.parentElement.remove();
// 		;
// 	});
// 	tr.append(newTd);
// }
