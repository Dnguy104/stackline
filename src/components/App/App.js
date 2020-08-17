import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js'
import Panel from '../Panel/Panel.js'
import Dashboard from '../Dashboard/Dashboard.js'

import { getApiData } from '../../store/actions/actions.js';
import './App.scss';

const App = (props) => {
  const { getApiData } = props;

  useEffect(() => {
    (async () => {
      try {
        await getApiData();
      }
      catch(e) {
        console.log(e);
      }
    })()
  }, []);

  return (
    <div className='app'>
      <Header />
      <Panel />
      <Dashboard />
    </div>
  );
}
const mapStateToProps = (state) => ({

})

export default connect(
  mapStateToProps, { getApiData }
)(App);
