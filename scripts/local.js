export const handleState = (products) => {
	let state;
	if (JSON.parse(localStorage.getItem("products")) !== null) {
		state = JSON.parse(localStorage.getItem("products"));
	} else {
		state = products.slice();
	}
	return state;
};
