var Donors = (function() {
	let arr = [];

	return {
		addDonor: function (donator) {
			arr.push(donator);
			console.log(arr);
		}
	}
})()