const values = { amount: 10000, years: 3, rate: 1.5 };
describe("Calculate Monthly Payment", function () {
	it("should calculate the monthly rate correctly", function () {
		expect(calculateMonthlyPayment(values)).toEqual("284.25");
	});
	it("should check if the return value is string", function () {
		expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);
	});
	it("should return a result with 2 decimal places", function () {
		expect(calculateMonthlyPayment(values).toString()).toMatch(/^\d+\.\d\d$/);
	});
});

/// etc
