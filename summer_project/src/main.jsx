import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Template",
    element: <Template />,
  },
  {
    path: "/Template_editor",
    element: <Template_editor />,
  },
  {
    path: "/Test",
    element: <MyComponent />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter router={router}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
