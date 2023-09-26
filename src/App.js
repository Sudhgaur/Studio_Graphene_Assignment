
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Products/Product';
// import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
