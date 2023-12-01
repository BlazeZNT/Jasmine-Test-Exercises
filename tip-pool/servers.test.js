describe("Servers test (with setup and tear-down)", function () {
	beforeEach(function () {
		// initialization logic
		serverNameInput.value = "Alice";
	});

	it("should add a new server to allServers on submitServerInfo()", function () {
		submitServerInfo();
		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers["server" + serverId].serverName).toEqual("Alice");
	});

	it("makes sure that the table data is correct", function () {
		submitServerInfo();
		updateServerTable();
		expect(serverTbody.firstChild.firstChild.innerHTML).toEqual("Alice");
	});

	afterEach(function () {
		// teardown logic
		serverNameInput.value = "";
		serverTbody.innerHTML = "";
		allServers = {};
		serverId = 0;
	});
});
