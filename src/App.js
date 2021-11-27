import './styles/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/signUp/SignUpPage';
import SignInPage from './components/signIn/SignInPage';
import UserContext from './contexts/userContext';
import { useState } from 'react';

function App() {
    const [user, setUser] = useState();
    
    return (
    <BrowserRouter>
        <UserContext.Provider value={{user, setUser}}>
            <Routes>
                <Route path='/sign-in' element={<SignInPage/>} exact/>
                <Route path='/sign-up' element={<SignUpPage/>} exact/> 
            </Routes>
        </UserContext.Provider>
    </BrowserRouter>
    );
}

export default App;