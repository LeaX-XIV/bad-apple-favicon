const timeout = 1000 / 30;
const max = 6574;

let ctr = 0;

setInterval(() => {
	// remove current favicon
	if(document.querySelector("link[rel='icon']") !== null)
		document.querySelector("link[rel='icon']").remove();
	if(document.querySelector("link[rel='shortcut icon']") !== null)
		document.querySelector("link[rel='shortcut icon']").remove();

	// add new favicon image
	document.querySelector("head")
		.insertAdjacentHTML('beforeend',
			`<link rel="icon" href="icons/ba${ctr.toString().padStart(4, "0")}.png" type="image/png">`);

	ctr = (ctr + 1) % max;
}, timeout);