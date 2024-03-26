import { Routes, Route } from 'react-router-dom';
import SignupPage from '../pages/SignupPage/SignupPage';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<SignupPage/>}/>
    </Routes>
  );
}

export default RoutesApp;