import './styles/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/signUp/SignUpPage';

function App() {
    return (
    <BrowserRouter>
        <Routes>
           <Route path='/sign-up' element={<SignUpPage/>} exact/> 
        </Routes>
    </BrowserRouter>
    );
}

export default App;