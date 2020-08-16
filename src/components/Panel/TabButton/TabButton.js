import React, { PropTypes } from 'react';
import './TabButton.scss';

const TabButton = (props) => {
  const {
    buttonName,
    icon
  } = props;
  return (
    <div className='tab-button-container'>
      <img className='icon' src={icon} alt='button-icon'/>
      <h4>{buttonName}</h4>
    </div>
  );
};

TabButton.propTypes = {

};

export default TabButton;
