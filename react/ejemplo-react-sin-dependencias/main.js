import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'
import React from 'https://esm.sh/react@18.2.0'

const domElement = document.getElementById('app')
const root = ReactDOM.createRoot(domElement)

const button = React.createElement('button', null, "Haz clic")
root.render(button)
