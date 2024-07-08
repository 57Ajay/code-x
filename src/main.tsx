import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {KindeProvider} from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KindeProvider
		clientId="2f379434cad341a6846d03da014d4f2d"
		domain="https://57ajay.kinde.com"
		redirectUri="http://localhost:5173"
		logoutUri="http://localhost:5173">

    <App />
    
    </KindeProvider>
  </React.StrictMode>,
)
