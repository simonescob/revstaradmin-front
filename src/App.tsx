import './App.css'
import Topbar from './components/topbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Companies from './pages/Companies';
import Products from './pages/Products';
import Container from './Layouts/Container';
import { useEffect, useState } from 'react';

function App() {

  const session = localStorage.getItem('token');

  const [showTopbar, setShowTopbar] = useState(false);

  useEffect(() => {
    
    if (session !== null) {
      setShowTopbar(true)
    }

    if (session !== undefined) {
      setShowTopbar(true)
    }

  }, [session])
  

  return (
    <>

      <Router>
        {showTopbar === true && <Topbar/>} 
        <Container>
          <Routes>

            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/companies" element={<Companies/>} />
            <Route path="/products" element={<Products/>} />


          </Routes>
        </Container>
      </Router>

    </>
  )
}

export default App
