import React from 'react';
import './experiences.css';
import logo from '../../icons/briefcase-in-a-circle.png'


class Experiences extends React.Component {
	render() {
		return (
			<div className = "section experiences">
				<div className = "experiences_wrap">
					<img src={logo} alt="logo.png"/>
					<h1 className="text-uppercase">Experiences</h1>
				</div>
				<div className="job-description">
					<div className="Job-description-wrap">
						<div className="job-title">
							<h3 className="text-left">Lead Developer</h3>
							<span>Startup Hubs, San Francisco</span>
						</div>
						<div className="date">
							<span>2015 - Present</span>
						</div>				
					</div>
					<div className="experiences-desc">
						<p>
							Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.Donec pede justo.
						</p>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
						</p>
					</div>
				</div>
				<div className="job-description">
					<div className="Job-description-wrap">
						<div className="job-title">
							<h3 className="text-left">Senior Software Engineer</h3>
							<span>Google, London</span>
						</div>
						<div className="date">
							<span>2014 - 2015</span>
						</div>				
					</div>
				<div className="experiences-desc">
					<p>
						Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.Donec pede justo.
					</p>
				</div>
				</div>
				<div className="job-description">
					<div className="Job-description-wrap">
						<div className="job-title">
							<h3 className="text-left">UI Developer</h3>
							<span>Amazon, London</span>
						</div>
						<div className="date">
							<span>2012 - 2014</span>
						</div>				
					</div>
				<div className="experiences-desc">
					<p>
						Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.Donec pede justo.
					</p>
				</div>
				</div>																			
			</div>		
		)
	}
}
export default Experiences;

