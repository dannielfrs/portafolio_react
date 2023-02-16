import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.scss'
import './assets/libraries/aos'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portafolio/" element={<Home />} />
        <Route path="/portafolio/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;