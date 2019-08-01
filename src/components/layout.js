import React from 'react';
import PropTypes from 'prop-types';
import './bootstrap.min.css';
import './layout.css';
import { Helmet } from 'react-helmet';

import Navbar from './Globals/Navbar';
import Footer from './Globals/Footer';

const Layout = ({ children }) => (
  <>
    <Helmet>
      <html lang="fr" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
      <script
        src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
        id="snipcart"
      ></script>
      <link
        href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
    <Navbar />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
