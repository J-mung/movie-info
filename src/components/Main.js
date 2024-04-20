import Home from '../features/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from '../features/login';
import '../css/Main.css';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<p1></p1>} />
          <Route path="/setting" element={<p1>this is setting</p1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default Main;
