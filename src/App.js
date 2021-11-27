import './styles/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './contexts/userContext';
import { useState } from 'react';

import SignUpPage from './components/signUp/SignUpPage.js';
import SignInPage from './components/signIn/SignInPage.js';
import PrincipalPage from './components/principal/principalPage.js';
import NewIncome from './components/registers/NewIncomePage.js';
import NewOutcome from './components/registers/NewOutcome.js';

function App() {
    const [user, setUser] = useState();
    
    return (
    <BrowserRouter>
        <UserContext.Provider value={{user, setUser}}>
            <Routes>
                <Route path='/' element={<SignInPage/>} exact/>
                <Route path='/sign-up' element={<SignUpPage/>} exact/> 
                <Route path='/principal' element={<PrincipalPage/>} exact/>
                <Route path='/registro-entrada' element={<NewIncome/>} exact/>
                <Route path='/registro-saida' element={<NewOutcome/>} exact/>
            </Routes>
        </UserContext.Provider>
    </BrowserRouter>
    );
}

export default App;