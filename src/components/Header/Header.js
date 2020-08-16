import React, { PropTypes } from 'react';
import logo from '../../assets/images/stackline.png';
import './Header.scss';

const Header = (props) => {
  return (
    <div className='header-container'>
      <img src={logo} alt='Stackline Logo' />
    </div>
  );
};

Header.propTypes = {

};

export default Header;
