import React, { Component } from 'react';
import { Rnd } from 'react-rnd';
import DLineChart from './DLineChart';
import DBarChart from './DBarChart';
import DPieChart from './DPieChart';

class DWindow extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			width: this.props.width, height: this.props.height, x: this.props.x, y: this.props.y, chart: this.props.chart
		};
	} 
  
	render() {

		let windowStyle = {
			boxSizing: 'border-box', padding: '0px',
			border: '1px solid lightgray', borderRadius:'4px', 
			backgroundColor: '#ffffff', boxSizing:'border-box', boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
		};
		let titleStyle = { width:'100%', boxSizing:'border-box', color:'#7f7f7f', backgroundColor:'#f7f7f7', padding:'4px 4px 4px 14px' };
		
		let chartJSX = null;
		if( this.props.chart.settings.type === 'lineChart' ) {
			chartJSX = <DLineChart width={this.state.width} height={this.state.height} lineChart={this.props.chart} />;
		}
		else if( this.props.chart.settings.type === 'barChart' ) {
			chartJSX = <DBarChart width={this.state.width} height={this.state.height} barChart={this.props.chart} />;
		}
		else if( this.props.chart.settings.type === 'pieChart' ) {
			chartJSX = <DPieChart width={this.state.width} height={this.state.height} pieChart={this.props.chart} />;
		}
		else {
			return( <div>INVALID CHART TYPE</div> ); 
		}

		return (
			<Rnd style={windowStyle} ref={c => { this.rnd = c; }} 
				size = {{ width: this.state.width, height: this.state.height }} 
			 	position = {{ x: this.state.x, y: this.state.y }} 
		        onDragStop={(e, d) => {
					this.setState({ x: d.x, y: d.y });
        		}}
				onResizeStop={(e, direction, ref, delta, position) => {
					this.setState({ width: parseInt(ref.style.width), height: parseInt(ref.style.height) });
				}} >
				<div style={titleStyle}>{this.props.chart.settings.title}</div>
				<div>				
					{chartJSX}
				</div>
			</Rnd>
		);
	} // end of render()
}

export default DWindow;
