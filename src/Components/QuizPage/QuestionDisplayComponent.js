/*
This is a class based component that displays the question and the navigation buttons.
This component also does the following:
1. Obtains the questions from Google's No-SQL Firebase
2. Handles the state of the object to display the current and next questions
3. Collects the quiz attempt data and passes it to the Results Page
*/

import React, { Component } from 'react';
import isEmpty from '../../utils/isEmpty';
import getResult from '../../utils/getResult';
import QuestionIndicatorComponent from './QuestionIndicatorComponent';
import { db } from '../../assets/Config';

class QuestionDisplayComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firebaseQuestions: [],
			currentQuestion: {},
			nextQuestion: {},
			answer: '',
			currentQuestionIndex: 0,
			answeredQuestions: [],
		};
		this.onValueChange = this.onValueChange.bind(this);
	}

	//Lifecycle Method to read data from Firbase and pass the state attributes to display the questions
	//This method helps to display the attributes from the changed state on re-render
	componentDidMount() {
		db.ref('/').on('value', snapshot => {
			let allques = [];
			snapshot.forEach(question => {
				allques.push(question.val());
			});
			this.updateState(allques);
			this.fetchAttributesToDisplay();
		});
	}

	//the async method helps to update the state on restarting the quiz from the results page
	async updateState(allques) {
		await this.setState({ firebaseQuestions: allques });
		this.fetchAttributesToDisplay(this.state);
	}

	fetchAttributesToDisplay = () => {
		const { firebaseQuestions, currentQuestion, nextQuestion, answeredQuestions } = this.state;
		this.displayQuestions(firebaseQuestions, currentQuestion, nextQuestion, answeredQuestions);
	};

	//Update the state to render the correct question on screen
	displayQuestions = (questions = this.state.firebaseQuestions, currentQuestion, nextQuestion, answeredQuestions) => {
		let { currentQuestionIndex } = this.state;

		if (!isEmpty(this.state.firebaseQuestions)) {
			questions = this.state.firebaseQuestions;
			currentQuestion = questions[currentQuestionIndex];
			nextQuestion = questions[currentQuestionIndex + 1];
			const answer = '';
			answeredQuestions = this.state.answeredQuestions;
			this.setState({
				currentQuestion,
				nextQuestion,
				answer,
				answeredQuestions,
			});
		}
	};

	//increments the question index and stores the current select answer. If no answer selected then displays alert
	nextButtonHandler = () => {
		if (!(this.state.answer === '')) {
			this.setState(
				prevState => ({
					answeredQuestions: prevState.answeredQuestions.concat(this.state.answer),
					currentQuestionIndex: this.state.currentQuestionIndex + 1,
				}),
				() => {
					this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.answeredQuestions);
				}
			);
		} else {
			window.alert('Please Select One Answer to Proceed');
		}
	};

	//captures the final answer, computes the result and sends the summary of the quiz to the results page
	buttonClickSubmitHandler = () => {
		if (this.state.answer === '') {
			window.alert('Please Select One Answer to Proceed');
		} else {
			this.setState(
				prevState => ({
					answeredQuestions: prevState.answeredQuestions.concat(this.state.answer),
				}),
				() => {
					const { state } = this;
					const results = getResult(state);
					this.props.history.push('/results', results);
				}
			);
		}
	};

	//updates the answer on radio button selection
	onChangeValueHandler = event => {
		this.setState({
			answer: event.target.value,
		});
	};

	onValueChange = event => {
		this.setState({
			selectedOption: event.target.value,
		});
	};

	render() {
		const { currentQuestion } = this.state;
		return (
			<div>
				{/* Current Question Indicator */}
				<QuestionIndicatorComponent questions={this.state.firebaseQuestions} currentIndex={currentQuestion.id} />
				<hr />
				<div className="question-display-container">
					{/* Display Current Question */}
					<div className="question-container">
						<p>{currentQuestion.question}</p>
					</div>
					{/* Display Question Options */}
					<div className="options-container" onChange={this.onChangeValueHandler}>
						<ul>
							<li>
								<input type="radio" name="answer" value={currentQuestion.optionA} checked={this.state.selectedOption === currentQuestion.optionA} onChange={this.onValueChange} />
								{currentQuestion.optionA}
							</li>
							<li>
								<input type="radio" name="answer" value={currentQuestion.optionB} checked={this.state.selectedOption === currentQuestion.optionB} onChange={this.onValueChange} />
								{currentQuestion.optionB}
							</li>
							<li>
								<input type="radio" name="answer" value={currentQuestion.optionC} checked={this.state.selectedOption === currentQuestion.optionC} onChange={this.onValueChange} />
								{currentQuestion.optionC}
							</li>
							<li>
								<input type="radio" name="answer" value={currentQuestion.optionD} checked={this.state.selectedOption === currentQuestion.optionD} onChange={this.onValueChange} />
								{currentQuestion.optionD}
							</li>
						</ul>
					</div>
					{/* Display Navigation Buttons */}
					<div className="action-button-container">
						<button className="next-button" onClick={this.nextButtonHandler} value="next" disabled={this.state.currentQuestionIndex === this.state.firebaseQuestions.length - 1}>
							Next
						</button>
						<button className="submit-button" onClick={this.buttonClickSubmitHandler} type="submit" disabled={!(this.state.currentQuestionIndex === this.state.firebaseQuestions.length - 1)}>
							Submit
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default QuestionDisplayComponent;
