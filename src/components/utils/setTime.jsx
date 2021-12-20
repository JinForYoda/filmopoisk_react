export default function setTime(str) {
	let hours = Math.floor((str / 60));

	let minutes = str - hours * 60;

	return `${hours} ч. ${minutes} мин. `
}
