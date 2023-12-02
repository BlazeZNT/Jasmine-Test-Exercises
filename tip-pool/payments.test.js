describe("Servers test for Payments", function () {
	beforeEach(function () {
		// initialization logics
		billAmtInput.value = "123";
		tipAmtInput.value = "12";
	});
	it("Test createCurPayment to make sure correct Object", function () {
		let obj = createCurPayment();
		expect(obj.billAmt).toEqual("123");
		expect(obj.tipAmt).toEqual("12");
		expect(obj.tipPercent).toEqual(10);
	});
	it("Test submitPaymentInfo to make sure correct the input data is correct", function () {
		submitPaymentInfo();
		expect(Object.keys(allPayments).length).toEqual(1);
		expect(allPayments["payment1"].billAmt).toEqual("123");
		expect(allPayments["payment1"].tipAmt).toEqual("12");
		expect(allPayments["payment1"].tipPercent).toEqual(10);
	});

	it("Test for Id of updated table element", function () {
		submitPaymentInfo();
		expect(paymentTbody.firstChild.id).toEqual("payment1");
	});

	it("Check if total bills results are accurate", function () {
		submitPaymentInfo();
		expect(summaryTds[0].innerHTML).toEqual("$123");
		expect(summaryTds[1].innerHTML).toEqual("$12");
		expect(summaryTds[2].innerHTML).toEqual("10%");
	});

	afterEach(function () {
		// teardown logic
		billAmtInput.value = "";
		tipAmtInput.value = "";
		allPayments = {};
		paymentId = 0;
		paymentTbody.innerHTML = "";
		summaryTds[0].innerHTML = "";
		summaryTds[0].innerHTML = "";
		summaryTds[0].innerHTML = "";
	});
});
