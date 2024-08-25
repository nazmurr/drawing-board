const { app, BrowserWindow, Menu, ipcMain, dialog } = require("electron");
const path = require("path");
const fs = require("fs");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadFile("index.html");

  // Define the custom menu template
  const menuTemplate = [
    {
      label: "File",
      submenu: [
        {
          label: "Save",
          click: () => {
            mainWindow.webContents.send("save-canvas-as-png");
          },
        },
        { role: "quit" },
      ],
    },
    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "toggledevtools" },
        { type: "separator" },
        { role: "resetzoom" },
        { role: "zoomin" },
        { role: "zoomout" },
        { type: "separator" },
        { role: "togglefullscreen" },
      ],
    },
    {
      label: "Window",
      submenu: [{ role: "minimize" }],
    },
  ];

  // Create the menu
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on("save-image", async (event, dataUrl) => {
  const { canceled, filePath } = await dialog.showSaveDialog({
    filters: [{ name: "Images", extensions: ["png"] }],
    defaultPath: "drawing.png",
  });

  if (!canceled && filePath) {
    const base64Data = dataUrl.replace(/^data:image\/png;base64,/, "");
    fs.writeFile(filePath, base64Data, "base64", (err) => {
      if (err) console.error("Failed to save the image:", err);
    });
  }
});
