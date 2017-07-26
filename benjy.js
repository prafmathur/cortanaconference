// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");
var http = require("http");


// Loop to check every timeout seconds
timeout = 2;
setInterval(tryGetCommand, timeout * 1000)

function tryGetCommand() {
	http.get('http://nafantest.cloudapp.net:65389/operation', (res) => {
	  if (res.statusCode == 500) {
	  	console.log("No new commands")
	  }
	  else {
		  res.setEncoding('utf8');
		  let rawData = '';
		  res.on('data', (chunk) => { rawData += chunk; });
		  res.on('end', () => {
			  const parsedData = JSON.parse(rawData);
			  operationName = parsedData["OperationName"];
			  console.log("Received operation:" + operationName);
			  controlMouseBasedOnOperation(operationName);
		  });	
	  }
	}).on('error', (e) => {
	  console.error(`Got error: ${e.message}`);
	});
}

//-----------------------------------------------
// Uncomment section below for single get request
//-----------------------------------------------

// http.get('http://nafantest.cloudapp.net:65389/operation', (res) => {
//   res.setEncoding('utf8');
//   let rawData = '';
//   res.on('data', (chunk) => { rawData += chunk; });
//   res.on('end', () => {
// 	  const parsedData = JSON.parse(rawData);
// 	  operationName = parsedData["OperationName"];
// 	  controlMouseBasedOnOperation(operationName);
//   });
// }).on('error', (e) => {
//   console.error(`Got error: ${e.message}`);
// });

function controlMouseBasedOnOperation(operation) {


	// Speed up the mouse.
	// robot.setMouseDelay(2);

	console.log(operation);
	var screenSize = robot.getScreenSize();
	var height = (screenSize.height / 2) -10;
	var width = screenSize.width;
	switch(operation){
		case 'Join':
			robot.moveMouse(29,240);
			robot.mouseClick();
			robot.moveMouse(1203,77);
			robot.mouseClick();
			break;
		case 'Share':
			robot.moveMouse (507,541);
			robot.mouseClick();
			break;
		case 'Add':
			robot.moveMouse(1151,103);
			robot.mouseClick();
			robot.typeString('nafan');
			setTimeout(function(){robot.moveMouse (1159,155); robot.mouseClick();},1000);
			break;
		case 'End':
			robot.moveMouse(568,544);
			robot.mouseClick();
			break;
		case 'Record':
		default:
			console.log("don't support");
	}

}
