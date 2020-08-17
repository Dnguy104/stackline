import React, { PropTypes, useState, useEffect, useCallback } from 'react';

import { connect } from 'react-redux';
import './Chart.scss';

const Header = (props) => {
  const {
    columns,
    sortSales
  } = props;

  const renderHeaders = useCallback(()=>{
    return columns.map((column, i)=>{
      return <div className={`chart-item header`} onClick={sortSales(column)} key={i}>{column}</div>
    });
  }, [columns]);

  return (
    <div className='chart-header-container'>
      {renderHeaders()}
    </div>
  );
};

const Chart = (props) => {
  const {
    fetched,
    data
  } = props;
  const [sales, setSales] = useState(data)
  const columns = fetched ? Object.keys(data[0]) : null;

  useEffect(()=>{
    setSales(data);
  }, [fetched])

  const sortSales = useCallback((key) => () => {
    let sortedSales = [ ...sales ]
    sortedSales.sort((a,b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0));
    setSales(sortedSales);
  });

  const renderSales = useCallback(()=>{
    return sales.map((item, i)=>{
      const chartItem = Object.values(item).map((column, i)=>{
        return <div className='chart-item' key={i}>{column}</div>
      });
      return <div className='chart-row' key={i}>{chartItem}</div>
    });
  }, [sales]);

  return (
    <div className='chart-container'>
      {fetched ?
        <>
          <Header columns={columns} sortSales={sortSales} />
          {renderSales()}
        </>
      : null}
    </div>
  );
};

Chart.propTypes = {

};

const mapStateToProps = (state) => ({
  fetched: state.app.fetched,
  data: state.app.data.sales,
})

export default connect(
  mapStateToProps, { }
)(Chart);
