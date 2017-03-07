window.onload = function() {
	// document.getElementById("arc1").setAttribute("d", mapArc(105, 105, 100, 0, 220))
	
	currentTime = new Date();
	hours = currentTime.getHours();
	if (hours < 5 || hours > 17) {
		document.getElementById("headline").textContent = "Good evening!"
	} else if (hours < 12) {
		document.getElementById("headline").textContent = "Good morning!"
	} else if (hours < 17) {
		document.getElementById("headline").textContent = "Good afternoon!"
	}
}

// document.getElementById("arc1").setAttribute("d", mapArc(105, 105, 100, 0, 220));

// function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
// 	var angleInRadians = (angleInDegrees-90) *Math.PI / 180.0;
// 	return {
// 		x: centerX + (radius*Math.cos(angleInRadians)),
// 		y: centerY + (radius*Math.sin(angleInRadians))
// 	};
// }

// function mapArc(x, y, radius, startAngle, endAngle) {
// 	var start = polarToCartesian(x, y, radius, endAngle);
// 	var end = polarToCartesian(x, y, radius, startAngle);
// 	var arc = endAngle - startAngle <= 180 ? "0" : "1";
// 	var d = [
// 		"M", start.x, start.y, 
// 		"A", radius, radius, 0, arc, 0, end.x, end.y,
// 		"L", x, y, 
// 		"L", start.x, start.y
// 	].join(" ");
// 	return d;
// }