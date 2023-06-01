
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/MenuBar';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import Registration from './pages/RegistrationPage'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/shop" element={ <OrderPage />}></Route>
            <Route path="/register" element={ <Registration />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
    
  );
}

export default App;
