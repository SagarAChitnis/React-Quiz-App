/*
This is the first page which asks the user to start the quiz
*/
import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import '../styles/StartPage.css';

class StartPage extends Component {
	startQuiz = () => {
		this.props.history.push('/quiz');
	};

	render() {
		return (
			<div>
				<HeaderBar />
				<div className="start-page-container">
					<div className="welcome-comment">Welcome to the Quiz App</div>
					<button className="start-button" onClick={this.startQuiz}>
						Start Quiz
					</button>
				</div>
			</div>
		);
	}
}

export default StartPage;
