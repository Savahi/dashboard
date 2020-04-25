import React, { Component } from 'react';
import AppHeader from './AppHeader';
import AppContent from './AppContent';

class App extends Component{   
	constructor(props) {
		super(props);       	
		
		this.state = { 
			lang: 'en',
			userName: '',
			title: 'Untitled'
		};				
	}

	render() {
		const style = {
			width: '100%',
			backgroundColor: '#efefef'		
		};

		return(
			<div style={style}>
				<AppHeader lang={this.state.lang} userName={this.state.userName} title={this.state.title} />
				<AppContent/>
			</div>
		);
	}
}
export default App;