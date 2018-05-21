let path = require('path');

let tray = require('../services/tray/tray.service');
let app = require('../services/app.service');


tray.setIcon(path.resolve(__dirname, '../camera.png'));

tray.setTitle('Locking system if user is afk');

tray.setMenu([
	{
		label: 'End',
		type: 'normal',
		click () {
			app.quit();
			console.log('End');
		}
	}
]);