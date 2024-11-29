import React from 'react';
import NavBar from './NavBar';

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="pt-16 md:pt-20">
        {children}
      </div>
    </div>
  );
}

export default Layout;