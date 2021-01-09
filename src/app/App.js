import React from 'react';
import './App.css';
import Careerprofile from '../Careerprofile/Careerprofile';
import Experiences from '../body/experiences/experiences'
import Projects from '../body/projects/projects'
import Skills from '../body/skills/skills'
import Addinfo from '../body/addinfo/addinfo'
import Main from '../main/Main';
import Footer from '../footer/Footer';

class App extends React.Component {
	constructor (props) {
		super(props); 
			this.state = {
				text: '',
				age: 0			
		}

	}

	render() {

		return (			
			<div className="App">
				<div className="wrapper">
					<div className="sidebar-wrapper">
						<Addinfo />
					</div>
					<div className="main-wrapper">
						<Careerprofile />
						<Experiences / >
						<Projects / >
						<Skills />		
						{/* <Footer /> */}
					</div>					
				</div>
			</div>		
		)
	}
}

export default App;