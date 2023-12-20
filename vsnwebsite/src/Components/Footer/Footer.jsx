import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Copyright VSN Clouds 2023 hello@vsnclouds.com</p>
    </footer>
  );
};

const styles = {
  footer: {
    // backgroundColor: '#333',
    // color: '#fff',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    marginLeft : '-560px',
    color : 'white',
 
  },
};

export default Footer;
