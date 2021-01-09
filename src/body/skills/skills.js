import React from 'react';
import './skills.css';
import logo from '../../icons/skills.png'


class Skills extends React.Component {
	render() {
		return (
			<div className = "section skills">
			<div className = "projects_wrap">				
				<img src={logo} alt="logo.png"/>
				<h1 className="text-uppercase">SKILLS & PROFICIENCY</h1>
			</div>
			<div className="skills-wrap">
				<div className="skills-name">
					<p>
						HTML5
					</p>
					<p>
						CSS3
					</p>
					<p>
						React
					</p>
					<p>
						ES6
					</p>
					<p>
						NPM
					</p>
					<p>
						GULP
					</p>
					<p>
						SASS,LESS
					</p>
					<p>
						GIT
					</p>
				</div>
				<div className="skills-percent">
					<span className="html5 percent"></span>
					<span className="css3 percent"></span>
					<span className="react percent"></span>
					<span className="es6 percent"></span>
					<span className="npm percent"></span>
					<span className="gulp percent"></span>
					<span className="sass percent"></span>
					<span className="git percent"></span>
				</div>
			</div>											
		</div>				
		)
	}
}
export default Skills;