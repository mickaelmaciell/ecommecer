import React from 'react';
import './logo.css';

function Logo({ type }) {
  const logoSrc =
    type === 'footer'
      ? 'https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/logo-footer.svg'
      : 'https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/logo-header.svg';

  return (
    <div className={`logo ${type}`}>
      <img src={logoSrc} alt="Digital Store Logo" />
    </div>
  );
}

export default Logo;
