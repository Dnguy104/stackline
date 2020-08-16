import React, { PropTypes, useCallback } from 'react';
import { connect } from 'react-redux';
import Tag from './Tag/Tag.js';
import TabButton from './TabButton/TabButton.js';
import './Panel.scss';

const Panel = (props) => {
  const {
    title,
    image,
    subtitle,
    tags,
    fetched
  } = props;

  const renderTags = useCallback(()=>{
    return tags.map((tag, i)=>{
      return <Tag tagName={tag} key={i}/>
    });
  }, [tags]);

  return (
    <div className='panel-container'>
      {fetched ?
        <>
          <img className='item' src={image} alt='item image'/>
          <h4>{title}</h4>
          <div className='subtitle-conatiner'>
            <p>{subtitle}</p>
          </div>
          <div className='tags-conatiner'>
            {renderTags()}
          </div>
          <div className='tab-buttons-conatiner'>
            <TabButton buttonName='Overview' icon='../../assets/icons/home.svg'/>
            <TabButton buttonName='Sales' icon='../../assets/icons/sales.svg'/>
          </div>
        </>
      : null}
    </div>
  );
};

Panel.propTypes = {

};

const mapStateToProps = (state) => ({
  fetched: state.app.fetched,
  title: state.app.data.title,
  image: state.app.data.image,
  subtitle: state.app.data.subtitle,
  tags: state.app.data.tags,
})

export default connect(
  mapStateToProps, {  }
)(Panel);
