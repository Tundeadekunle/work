import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Resources from './components/Resources';
import Solutions from './components/Solutions';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='resources' element={<Resources />} />
          <Route path='solutions' element={<Solutions />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='contact' element={<Contact />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
        </Route>
      
      </Routes>
    </>
  );
}

export default App;
