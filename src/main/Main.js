import React from 'react';
import './main.css';

class Main extends React.Component {
	render() {
		return (
			<div className="container">
				<main>
					<h1>My CV</h1>
					<article>
						<header>
							<h1>Article1</h1>
							<h2>Article2</h2>
						</header>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam quaerat, ipsa harum architecto labore necessitatibus id officiis nesciunt. Explicabo blanditiis hic adipisci minima quisquam ducimus distinctio reiciendis saepe nemo aut?
						</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam quaerat, ipsa harum architecto labore necessitatibus id officiis nesciunt. Explicabo blanditiis hic adipisci minima quisquam ducimus distinctio reiciendis saepe nemo aut?
						</p>
					</article>			
				</main>
			</div>						
		)
	}
}
export default Main;