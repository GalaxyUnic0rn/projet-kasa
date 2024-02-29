import React from 'react';
import Gallery from '../../components/gallery/Gallery'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner';
// import './Home.scss';

export default function Home() {
	return (
		<div className='home'>
			<Banner />
			<Gallery />
		</div>
	)
}