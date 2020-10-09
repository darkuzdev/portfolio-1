import React, { useEffect, useState } from 'react';
import '../styles/main.css';

// Components
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = props => {
  // State for change dark/light theme
  const [theme, setTheme] = useState('');

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'light');
  }, []);

  return (
    <div className={theme}>
      <div className="min-h-screen flex flex-col bg-light-secondary dark:bg-dark-secondary">
        <Navbar theme={theme} setTheme={setTheme} />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
