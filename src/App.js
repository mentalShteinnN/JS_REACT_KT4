import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';
import ProductInfoPage from './pages/ProductInfoPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/products' element={<AboutPage/>}/>
          <Route path='/product/:id' element={<ProductInfoPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
