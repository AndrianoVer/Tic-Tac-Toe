import React from 'react';
import './addinfo.css';
import photo from '../../img/Me.png'

class Addinfo extends React.Component {
	render() {
		return (
			<div className="addinfo">
				<div className="profile-box">
					<img className="img-rounded" src={photo} alt="me.png"/>
					<h1 className="name">Andrew Verbitsky</h1>
					<h3 className="position">Junior Front-End Developer</h3>
				</div>
				<div className="contact-box">
					<ul className="contact-list">
						<li>
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<a href="mailto:averbitski5@gmail.com">averbitski5@gmail.com</a>
						</li>
						<li>
							<i className="fa fa-phone" aria-hidden="true"></i>
							<a href="tel:+380676707769">+380676707769</a>
						</li>
						<li>
							<i className="fa fa-linkedin"></i>
							<a href="www.linkedin.com/in/andrianover" target="_blank">www.linkedin.com/in/andrianover</a>
						</li>
						<li>
							<i className="fa fa-github"></i>
							<a href="https://andrianover.github.io/CV/">https://andrianover.github.io/CV/</a>
						</li>
					</ul>
				</div>
				<div className="education-box">
					<h2>Education</h2>
					<p>
						Engineer in the field of electronics and telecommunications
					</p>
					<p className="time">
						Lviv Polytechnic National University, 1999— 2004
					</p>
				</div>				
				<div className="language-box">
					<h2>language</h2>
					<ul className="language-list">
						<li>English <span>(Intermediate)</span></li>
						<li>Ukrainian <span>(Native)</span></li>
						<li>Russian<span>(Professional)</span></li >
					</ul>
				</div>
				<div className="interests-box">
					<h2>Interests</h2>
					<ul className="interests-container">
						<li>Snowboarding</li>
						<li>Play table tenis</li>
						<li>Cooking</li>
						<li>Travelling</li>
					</ul>
				</div>
			</div>												
		)
	}
}
export default Addinfo;