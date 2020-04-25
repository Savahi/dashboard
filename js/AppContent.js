import React, { Component } from 'react';
import styles from './../css/appcontent.css'; 
import DWindow from './DWindow';

class AppContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
		};
	}

	render() {

		let data = {
			title: 'Заголовок проекта',
			lang: 'ru',
			charts: [
				{ 
					settings: { type: 'lineChart', title: 'График', 
						xPct:10, yPct:10, widthPct:40, heightPct:50 }, 
					charts: {  'скорость': { stroke:'#cf7fef' }, 'pv': { stroke:'#7fceef' }, 'amt': { stroke: '#cfef7f' } },
					data: [ 
						{name: 'Блок A', 'скорость': 400, pv: 300, amt: 300}, {name: 'Page B', 'скорость': 500, pv: 400, amt: 300},
						{name: 'Page C', 'скорость': 400, pv: 500, amt: 500}, {name: 'Page D', 'скорость': 600, pv: 400, amt: 600},
					]
				},
				{ 
					settings: { type: 'barChart', title: 'Столбчатая диаграмма', 
						xPct:50, yPct:20, widthPct:40, heightPct:50 }, 
					charts: {  'скорость': { fill:'#cf7fef' }, 'pv': { fill:'#7fceef' }, 'amt': { fill: '#cfef7f' } },
					data: [ 
						{name: 'Блок A', 'скорость': 400, pv: 300, amt: 300}, {name: 'Page B', 'скорость': 500, pv: 400, amt: 300},
						{name: 'Page C', 'скорость': 400, pv: 500, amt: 500}, {name: 'Page D', 'скорость': 600, pv: 400, amt: 600},
					]
				},
				{ 
					settings: { type: 'pieChart', title: 'Круговая диаграмма', 
						xPct:20, yPct:40, widthPct:40, heightPct:50, 
						colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'], fill: '#8884d8' }, 
					data: [ 
						{ name: 'Блок A', value: 400 }, { name: 'Page B', value: 500 },
						{ name: 'Page C', value: 400 }, { name: 'Page D', value: 400 },
					]
				},
			]
		};


		let charts = [];
		if( data.charts.length > 0 ) {
			try {
				for( let i = 0 ; i < data.charts.length ; i++ ) {
					let c = data.charts[i];	
					if( !('settings' in c) ) {
						continue;
					}
					let stt = c.settings;
					if( !('xPct' in stt && 'yPct' in stt && 'widthPct' in stt && 'heightPct' in stt) ) {
						continue;
					}
					let w = window.innerWidth - 50;
					let h = window.innerHeight - 50;
					let x = Math.round( stt.xPct *  w / 100.0 ); 
					let y = Math.round( stt.yPct * h / 100.0 ); 
					let width = Math.round( stt.widthPct * w / 100.0 ); 
					let height = Math.round( stt.heightPct * h / 100.0 ); 
					charts.push( <DWindow key={i} x={x} y={y} width={width} height={height} chart={c} /> );		
				}
				return (
					<div className={styles.container}>
						{charts}
					</div>
				);
			} catch(e) {
				;
			}
		}
		return( <div>Failed to load data</div>);
	}
}

export default AppContent;