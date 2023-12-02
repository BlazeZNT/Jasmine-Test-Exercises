describe("helpers test (with setup and tear down) ", function () {
	beforeEach(function () {
		// initialization logic
		billAmtInput.value = "123";
		tipAmtInput.value = "12";
		submitPaymentInfo();
	});
	it("makes sures the return amount is correct ", function () {
		expect(sumPaymentTotal("billAmt")).toEqual(123);
		expect(sumPaymentTotal("tipPercent")).toEqual(10);
		expect(sumPaymentTotal("tipAmt")).toEqual(12);
	});

	it("makes sure the calculation for the TipPercent is correct", function () {
		expect(calculateTipPercent(100, 23)).toEqual(23);
	});

	it("makes sure the table creation is correct", function () {
		let newTr = document.createElement("tr");
		appendTd(newTr, "Hello");
		expect(newTr.children.length).toEqual(1);
		expect(newTr.firstChild.innerHTML).toEqual("Hello");
	});

	afterEach(function () {
		billAmtInput.value = "";
		tipAmtInput.value = "";
		allPayments = {};
		paymentId = 0;
		paymentTbody.innerHTML = "";
		summaryTds[0].innerHTML = "";
		summaryTds[0].innerHTML = "";
		summaryTds[0].innerHTML = "";
		serverTbody.innerHTML = "";
	});
});
