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
