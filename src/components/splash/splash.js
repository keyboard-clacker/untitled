import React from 'react';
import Wave from './wave';
import bigBlob from './big-blob.png';
import useMounted from '../../utils/useMounted';
import './splash.module.css';

const Splash = () => {
	const isMounted = useMounted();

	return (
		<div styleName="container">
			{isMounted ? (
				<>
					<Wave styleName="wave1" />￼
					<Wave styleName="wave2" />￼
					<Wave styleName="wave3" />￼
				</>
			) : null}
			<div styleName="big-blob-container">
				<img styleName="big-blob" src={bigBlob} alt="big blob" />
			</div>
			<span styleName="name">Kyle Holzinger</span>
		</div>
	);
};

export default Splash;
