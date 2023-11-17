import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from './context/AuthContextProvider.jsx';
import { UserDetails, UserDetailsProvider } from './context/UserDetails.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
        <UserDetailsProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </UserDetailsProvider>
    </AuthContextProvider>
)
