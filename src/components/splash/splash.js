import React from 'react';
import Wave from './wave';
import bigBlob from './big-blob.png';
import './splash.module.css';

const Splash = () => {
	return (
		<div styleName="container">
			<Wave styleName="wave1" />￼
			<Wave styleName="wave2" />￼
			<Wave styleName="wave3" />￼
			<div styleName="big-blob-container">
				<img styleName="big-blob" src={bigBlob} alt="big blob" />
			</div>
			<span styleName="name">Kyle Holzinger</span>
		</div>
	);
};

export default Splash;
