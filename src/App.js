import 'normalize.css';
import '../src/styles/styles.scss'
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Swal from 'sweetalert2'

import '../src/styles/styles.scss';

import { userContext } from './context/userContext';



function App() {
  const [user, setUser] = useState("");

  const login = (name) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Bienvenido: ${name}`,
      showConfirmButton: false,
      timer: 1500
    })
    setUser(name)
  };
  const logout = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: `Abandonando sesión`,
      showConfirmButton: false,
      timer: 1500
    })
    setUser("")};

  const data = {
    user,
    login,
    logout
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={data}>
          <Header />
          <Main />
        </userContext.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
