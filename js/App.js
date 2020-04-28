import React, { Component } from 'react';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import Settings from './Settings';

class App extends Component{   
	constructor(props) {
		super(props);       	
		
		this.state = { 
			lang: 'en',
			userName: 'Not authorized',
			title: Settings.waitLoadingText['en']
		};				

		this.changeLang = this.changeLang.bind(this);
	}

	changeLang( e ) {
		for( let i = 0 ; i < Settings.langs.length ; i++ ) {
			if( Settings.langs[i] === this.state.lang ) {
				let lang = ( i < Settings.langs.length-1 ) ? Settings.langs[i+1] : Settings.langs[0];  		
				this.setState( { lang: lang } );
				break;
			}
		}
	}

	render() {
		const style = {
			width: '100%',
			backgroundColor: '#efefef'		
		};

		return(
			<div style={style}>
				<AppHeader lang={this.state.lang} userName={this.state.userName} title={this.state.title} changeLang={this.changeLang} />
				<AppContent/>
			</div>
		);
	}
}
export default App;