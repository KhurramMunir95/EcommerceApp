import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Products from "./pages/Products";
import CartDetail from './pages/CartDetail';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
