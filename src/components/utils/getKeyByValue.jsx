export default function getKeyByValue(object, value) {
	const string = Object.keys(object).find(key => object[key] === value)
	console.log(string);
	return string.charAt(0).toUpperCase() + string.slice(1)
}
