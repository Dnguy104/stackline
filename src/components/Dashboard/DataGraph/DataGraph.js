import React, { PropTypes, useCallback } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';
import './DataGraph.scss';

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const DataGraph = (props) => {
  const {
    data,
    fetched
  } = props;

  const date = d3.timeParse('%Y-%m-%d');

  const x = d3.scaleLinear()
    .domain(d3.extent(data, (d) => date(d.weekEnding)))
    .range([0, 1000]);

  const y1 = d3.scaleLinear()
    .domain([100, d3.max(data, (d) => d.retailSales)])
    .range([150, 50]);

  const y2 = d3.scaleLinear()
    .domain([150, d3.max(data, (d) => d.wholesaleSales)])
    .range([200, 100]);

  const wholesaleLine = d3.line()
    .x(sale => x(date(sale.weekEnding)))
    .y(sale => y2(sale.wholesaleSales))
    .curve(d3.curveCatmullRom.alpha(0.7));

  const retailLine = d3.line()
    .x(sale => x(date(sale.weekEnding)))
    .y(sale => y1(sale.retailSales))
    .curve(d3.curveCatmullRom.alpha(0.7));


  const renderAxis = useCallback(() => {
    return (
      <div className={'x-axis'}>
        {months.map((month, i) => <span key={i}>{month}</span>)}
      </div>
    );
  });

  return (
    <div className='graph-container'>
      <div className={'graph-item'}>
        <h4>Retail Sales</h4>
        <svg preserveAspectRatio="none" width={800} height={400}>
          <path className={'retail-line'} d={retailLine(data)} />
          <path className={'wholesale-line'} d={wholesaleLine(data)} />
        </svg>
        {renderAxis()}
      </div>
    </div>
  );
};

DataGraph.propTypes = {

};

const mapStateToProps = (state) => ({
  data: state.app.data.sales,
  fetched: state.app.fetched,
})

export default connect(
  mapStateToProps, {  }
)(DataGraph);
