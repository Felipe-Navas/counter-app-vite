import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp'
// import { App } from './App'
// import { FirstApp } from './FirstApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirstApp title="Titulo First App" subTitle="Si hay subtitulo" /> */}
    <CounterApp value={10} />
  </React.StrictMode>
)
