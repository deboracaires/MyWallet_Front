import './styles/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/signUp/SignUpPage';
import SignInPage from './components/signIn/SignInPage';
import UserContext from './contexts/userContext';
import { useState } from 'react';
import PrincipalPage from './components/principal/principalPage';

function App() {
    const [user, setUser] = useState();
    
    return (
    <BrowserRouter>
        <UserContext.Provider value={{user, setUser}}>
            <Routes>
                <Route path='/' element={<SignInPage/>} exact/>
                <Route path='/sign-up' element={<SignUpPage/>} exact/> 
                <Route path='/principal' element={<PrincipalPage/>} exact/>
            </Routes>
        </UserContext.Provider>
    </BrowserRouter>
    );
}

export default App;