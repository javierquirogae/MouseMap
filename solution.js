document.addEventListener('mousemove', function(e) {
	//take the ratio of the mouse X vs. the entire window available X
	// and compute the equivalent color value from 0-255:
	const r = Math.round(e.pageX * 255 / window.innerWidth*(1-(e.pageY/ window.innerHeight)));
	// Do thee same thing for the mouse Y:
	const g = Math.round((255-r)*(1-(e.pageY/ window.innerHeight)));
	const b = Math.round(e.pageY * 255 / window.innerHeight);
	// Make our rgb formatted color string:
	const color = `rgb(${r},${g},${b})`;
	//Set the body backgroundColor!
	document.body.style.backgroundColor = color;
	console.log(color);
});
