import React from 'react'
import ReactDOM from 'react-dom/client'

import { initializeApp } from "firebase/app";

import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyDhJDuyD5cWIcmatJe9fv4d2ngZEZTuzw4",
  authDomain: "proyectocoder-b8469.firebaseapp.com",
  projectId: "proyectocoder-b8469",
  storageBucket: "proyectocoder-b8469.appspot.com",
  messagingSenderId: "402935956478",
  appId: "1:402935956478:web:a65518290dcba70e58b6af",
  measurementId: "G-N15LNZF9E4"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
