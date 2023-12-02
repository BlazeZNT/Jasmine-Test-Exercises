describe("Servers test for Helpers ", function () {
	beforeEach(function () {
		// initialization logic
		billAmtInput.value = "123";
		tipAmtInput.value = "12";
	});
	it("makes sures to return a number ", function () {
		expect(sumPaymentTotal("billAmtInput")).toEqual("123");
	});

	afterEach(function () {
		billAmtInput.value = "";
		tipAmtInput.value = "";
		allPayments = {};
		paymentId = 0;
	});
});
