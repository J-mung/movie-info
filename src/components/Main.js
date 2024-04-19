import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
