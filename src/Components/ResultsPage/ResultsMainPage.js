/*
This page displays the result summary of the quiz and the user's answer for every question
*/

import React, { Component } from 'react';
import HeaderBar from '../HeaderBar';
import calculateStats from '../../utils/calculateStats';
import CorrectAnsDisplayComponent from './CorrectAnsDisplayComponent';
import IncorrectAnsDisplayComponent from './IncorrectAnsDisplayComponent';
import '../../styles/ResultsMainPage.css';

class Results extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: this.props.location.state,
		};
	}

	restartQuizHandler = () => {
		this.props.history.replace('/quiz');
	};

	render() {
		const statistics = calculateStats(this.props.location.state);
		return (
			<div>
				<HeaderBar />
				{/* Displaying the Summary */}
				<div className="summary-display">
					<p className="print-summary">RESULT: {statistics['percent']}%</p>
					<p className="print-summary-count">
						Your Score: {statistics['correctCount']} / {this.state.results.length}
					</p>
				</div>
				{/* Displaying answer choices for every question */}
				<div className="quiz-container">
					<div className="results-page">{this.state.results.map((element, index) => (element['status'] === 'Correct' ? <CorrectAnsDisplayComponent result={element} key={index} /> : <IncorrectAnsDisplayComponent result={element} key={index} />))}</div>
					<div>
						<button className="restart-button" onClick={this.restartQuizHandler}>
							Restart
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Results;
