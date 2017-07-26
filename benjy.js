// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");
var http = require("http");

http.get('http://nafantest.cloudapp.net:65389/operation', (res) => {
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
	  const parsedData = JSON.parse(rawData);
	  operationName = parsedData["OperationName"];
	  controlMouseBasedOnOperation(operationName);
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});

function controlMouseBasedOnOperation(operation) {

// Sneha do stuff here
// Documentation at http://robotjs.io/docs/examples

	// Speed up the mouse.
	// robot.setMouseDelay(2);

	// var twoPI = Math.PI * 2.0;
	// var screenSize = robot.getScreenSize();
	// var height = (screenSize.height / 2) - 10;
	// var width = screenSize.width;

	// for (var x = 0; x < width; x++)
	// {
	// 	y = height * Math.sin((twoPI * x) / width) + height;
	// 	robot.moveMouse(x, y);
	// }

}
