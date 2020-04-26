import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';



const {
    HorizontalGridLines,
    VerticalGridLines,
    XAxis,
    XYPlot,
    YAxis,
    LineMarkSeries
  } = reactVis;
  
  function Chart({data}) {
    return <XYPlot width={400} height={400}><XAxis/><YAxis/>
      <HorizontalGridLines />
      <VerticalGridLines />
      <LineMarkSeries data={data} />
      </XYPlot>;
  }
  
  const data = new Array(19).fill(0).reduce((prev, curr) => [...prev, {
    x: prev.slice(-1)[0].x + 1,
    y: prev.slice(-1)[0].y * (0.9 + Math.random() * 0.2) 
  }], [{x: 0, y: 10}]);
  
  const chart = <Chart data={data}/>;
  ReactDOM.render(chart, document.querySelector('#root'));
  