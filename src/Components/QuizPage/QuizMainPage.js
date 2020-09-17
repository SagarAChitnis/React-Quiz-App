/*
This is the main page of the quiz and consists of the question display component
 */

import React, { Component } from 'react';
import HeaderBar from '../HeaderBar';
import QuestionDisplayComponent from './QuestionDisplayComponent';
import '../../styles/QuizMainPage.css';

class QuizMainPage extends Component {
	render() {
		return (
			<div className="main-page-container">
				<title>Quiz App</title>
				<HeaderBar />
				<div className="page-heading">
					<h3>General Knowledge Quiz</h3>
				</div>
				{/* Display Questions and Options */}
				<div className="quiz-container">
					<QuestionDisplayComponent history={this.props.history} />
				</div>
			</div>
		);
	}
}

export default QuizMainPage;
