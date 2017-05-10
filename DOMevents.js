let donate = document.getElementById('donate'),
	name = document.getElementById('name'),
	email = document.getElementById('email'),
	dollar = document.getElementById('donation'),
	lap = document.getElementById('per'),
	lump = document.getElementById('lump'),
	donorTable = document.getElementById('donors');

donate.addEventListener('click', function(event) {
	let donator = {};

	donator.name = name.value;
	donator.email = email.value;
	donator.pledge = dollar.value;

	if(lap.checked) {
		donator.type = "per lap";
	} else if(lump.checked) {
		donator.type = "lump sum";
	}
	console.log(donator);
	Donors.addDonor(donator);
	console.log(Donors);
})