import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

class DLineChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			width:this.props.width, height: this.props.height
		};
	}

	render() {
		let keys = Object.keys(this.props.lineChart.charts);
		if( keys.length > 0 ) {
			let charts = [];
			charts.push( <CartesianGrid strokeDasharray="3 3" /> );
  			charts.push( <XAxis dataKey="name" style={{fontSize:'12px'}} /> ); 
			charts.push( <YAxis domain={[200, 700]} style={{fontSize:'12px'}} /> );
  			charts.push( <Tooltip /> );
			charts.push( <Legend style={{fontSize:'11px'}} /> );
			for( let i in keys ) {
				let k = keys[i];
				charts.push( <Line type="monotone" key={i} dataKey={k} stroke={this.props.lineChart.charts[k].stroke} /> );
			}
			let margin = { top:10, left:0, right:20, bottom:30 };
			let style= { fontSize:'12px', color: '#7f7f7f' };	
			return (
				<LineChart width={this.props.width} height={this.props.height} data={this.props.lineChart.data} style={style} margin={margin}>
					{charts}
				</LineChart>
			);
		} else {
			return( <div>NO DATA</div> );
		}
	}
}

export default DLineChart;
