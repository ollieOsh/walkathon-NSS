var Donors = (function() {
	let arr = [];

	return {
		addDonor: function (donator) {
			arr.push(donator);
			console.log(arr);
		},
		showDonor: function(obj) {
			let str = `<tr>`;

			for(prop in obj) {
				str += `<td>${obj[prop]}</td>`;
			}

			str += `</tr>`;
			donorTable.innerHTML += str;
			str = '';
		}
	}
})()