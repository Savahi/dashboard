import React, { Component } from 'react';
import styles from './../css/appheader.css'; 
import Settings from './Settings';

class AppHeader extends React.Component {

	constructor(props) {
		super(props);

		this.state = { 
		};				
	}

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.lang}>{ Settings.lang[ this.props.lang] }</div>
				<div className={styles.title}>{ this.props.title }</div>
				<div className={styles.user}>{ this.props.userName } :: { Settings.exitText[this.props.lang] }</div>
			</div>
		);
	}
}

export default AppHeader;