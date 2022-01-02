
export default function getDate() {
	const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	const d = new Date();
	return {
		month: monthNames[d.getMonth()].toUpperCase(),
		year: d.getFullYear()
	}
}
