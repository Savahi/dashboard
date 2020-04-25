import React, { PureComponent, Component } from 'react';
import { PieChart, Pie, Legend, Sector, Cell } from 'recharts';

class DPieChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			width:this.props.width, height: this.props.height
		};
	}

	render() {
		let radius = (this.props.width > this.props.height ) ? (this.props.height * 0.4) : (this.props.width * 0.4);

		let colorMapping = null;
		let colors = this.props.pieChart.settings.colors;
		if( colors !== undefined && colors !== null ) {
			colorMapping = this.props.pieChart.data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />);
		}
		let legend = <Legend />					
		let style= { fontSize:'12px', color: '#7f7f7f' };	
		return (
			<PieChart style={style} width={this.props.width} height={this.props.height} margin={{ top: 5, right: 15, left: 15, bottom: 30 }}>
				{legend}
				<Pie data={this.props.pieChart.data} dataKey="value" nameKey="name" cx="50%" cy="50%" 
				 outerRadius={radius} fill={this.props.pieChart.settings.fill} label>
					{colorMapping}
				</Pie>
			</PieChart>
		);
	}
}

export default DPieChart;
