import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DataGraph from './DataGraph/DataGraph.js';
import Chart from './Chart/Chart.js';
import './Dashboard.scss';

const Dashboard = (props) => {
  const {
    fetched
  } = props;
  return (
    <div className='dashboard-container'>
      {fetched ?
        <>
          <DataGraph/>
          <Chart/>
        </>
      : null}
    </div>
  );
};

Dashboard.propTypes = {

};

const mapStateToProps = (state) => ({
  fetched: state.app.fetched,
})

export default connect(
  mapStateToProps, {  }
)(Dashboard);
