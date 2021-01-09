import React from 'react';
import './projects.css';
import logo from '../../icons/project.png'


class Projects extends React.Component {
	render() {
		return (
			<div className = "section projects">
			<div className = "projects_wrap">				
				<img src={logo} alt="logo.png"/>
				<h1 className="text-uppercase">Projects</h1>
			</div>
			<div className="project-desc">
				<p className="text-left">
					You can list your side projects or open source libraries in this section.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum et ligula in nunc bibendum fringilla a eu lectus.
				</p>
			</div>					
			<div className="projects-box">
				<p className = "text-left" >
					<a href=".#">Velocity</a> - A responsive website template designed to help startups promote, market and sell their products.
				</p>
				<p className="text-left">
					<a href=".#">DevStudio</a> - A responsive website template designed to help web developers / designers market their services.
				</p>
				<p className = "text-left" >
					<a href=".#">Tempo</a> - A responsive website template designed to help startups promote their products or services and to attract users & investors
				</p>
				<p className = "text-left" >
					<a href=".#">Atom</a>	- A comprehensive website template solution
					for startups / developers to market their mobile apps.
				</p>
				<p className = "text-left" >
					<a href=".#">Delta</a> - A responsive Bootstrap one page theme designed to help app developers promote their mobile apps
				</p>
			</div>																					
		</div>			
		)
	}
}
export default Projects;