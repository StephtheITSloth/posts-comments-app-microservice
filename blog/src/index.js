import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'

const container = createRoot(document.getElementById('root'))
const root = container
root.render(
    <App/>
)