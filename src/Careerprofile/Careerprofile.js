import React from 'react';
import './Careerprofile.css';
import logo from '../icons/contact.png'


class Careerprofile extends React.Component {
	render() {
		return (
			<header>
				<div className = "section careerprofile">
					<div className="header_wrap">
						<img src={logo} alt="logo.png"/>
						<h1 className="text-uppercase">Career Profile</h1>
					</div>
					<div className="career_description">
					<p className="text-left">
					   Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href=".#">download this resume MYCV.pdf here.</a>  Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.
					</p>
					</div>														
				</div>
			</header>
		)
	}
}
export default Careerprofile;
	