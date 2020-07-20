import React from 'react';
import footerStyles from './footer.module.css';

const Footer = () => (
  <footer className={footerStyles.footer}>
    <div className="container">
      <span className="text-muted">© Gatsby POC 2020</span>
    </div>
  </footer>
);

export default Footer;