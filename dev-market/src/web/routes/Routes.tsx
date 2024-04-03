import { Routes, Route } from 'react-router-dom';
import SignupPage from '../pages/SignupPage/SignupPage';
import Login from '../pages/Login/Login';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<SignupPage/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  );
}

export default RoutesApp;