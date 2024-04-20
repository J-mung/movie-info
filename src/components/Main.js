import Home from '../features/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from '../features/login';
import '../css/Main.css';
import SignUp from './../features/signUp/index';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="main_router">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail" element={<p1></p1>} />
            <Route path="/setting" element={<p1>this is setting</p1>} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
