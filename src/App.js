import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png'
import LoginSignIn from './Pages/LoginSignIn';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './Components/ProtectedRoute'; 


function App() {
  return (
    <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<LoginSignIn />} />
        <Route path="/signup" element={<LoginSignup />} />
        <Route path="/" element={<ProtectedRoute element={Shop} />} />
        <Route path="/mens" element={<ProtectedRoute element={() => <ShopCategory banner={men_banner} category="men" />} />} />
        <Route path="/womens" element={<ProtectedRoute element={() => <ShopCategory banner={women_banner} category="women" />} />} />
        <Route path="/kids" element={<ProtectedRoute element={() => <ShopCategory banner={kid_banner} category="kid" />} />} />
        <Route path="/product/:productId" element={<ProtectedRoute element={Product} />} />
        <Route path="/cart" element={<ProtectedRoute element={Cart} />} />
      </Routes>
      <Footer />
    </Router>
  </AuthProvider>
  );
}

export default App;
