const { Tray, Menu, nativeImage } = require('electron')
const path = require('path')

function setIcon() {
    const iconPath = path.join('src/camera.png');
    var trayIcon = nativeImage.createFromPath(iconPath);

    trayIcon = trayIcon.resize({ width: 16, height: 16 });
    const tray = new Tray(trayIcon);
    
    const contextMenu = Menu.buildFromTemplate([
        {label: 'Start', type: 'normal'},
        {label: 'End', type: 'normal'}
    ])
    tray.setToolTip('Locking system if user is afk');
    tray.setContextMenu(contextMenu);
}

module.exports = setIcon;