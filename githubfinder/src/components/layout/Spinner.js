import React, { Component, Fragment } from 'react';
import spinner from './spinner.gif';

class Spinner extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<img
						src="./spinner.gif"
						alt="loading..."
						style={{ width: '300px', margin: 'auto', display: 'block' }}
					></img>
				</div>
			</Fragment>
		);
	}
}

export default Spinner;
