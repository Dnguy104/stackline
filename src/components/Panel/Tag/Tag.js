import React, { PropTypes } from 'react';
import './Tag.scss';

const Tag = (props) => {
  const {
    tagName,
  } = props;
  return (
    <div className='tag-container'>
      {tagName}
    </div>
  );
};

Tag.propTypes = {

};

export default Tag;
