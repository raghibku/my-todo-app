import React, { createContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { getTaskFromLS } from './utilities/LocalStorage.js'
import TodoProvider from './provider/TodoProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProvider >
      <App />
    </TodoProvider>
  </React.StrictMode>,
)
