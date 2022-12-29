import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const moonIcon = <FontAwesomeIcon icon={faMoon} />;

export default function Header() {
	return (
		<div className='headerWrapper'>
			<h1 className='headerTitle'>Where in the world?</h1>
			<button className='headerButton'>
				<span className='moonIcon'>{moonIcon}</span>
				<span>Dark Mode</span>
			</button>
		</div>
	);
}
