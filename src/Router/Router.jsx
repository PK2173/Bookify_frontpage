import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages ......
import Home from '../Pages/Home/Home';
import NotFound from '../Pages/NotFound/Notfound';

// import components......
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
