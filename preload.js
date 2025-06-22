const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('testApi', {
  test: () => {return "Hello, world!"}
})