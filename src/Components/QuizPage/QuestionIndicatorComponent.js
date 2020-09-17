/* 
This Component has two major responsibilties:
1. displaying the number of questions in the quiz
2. dynamically highlighting the current question, seperating the answered from the pending
*/

import React from 'react';

const QuestionIndicatorComponent = props => {
	return (
		<div className="question-navigator-container">
			{/* Looping over questions array length to create dynamic question indicators */}
			{props.questions.map((element, index) =>
				index < props.currentIndex ? (
					<button className="attempted-question" disabled={true} key={index}>
						Question {index + 1}
					</button>
				) : (
					<button className="current-question" disabled={true} key={index}>
						Question {index + 1}
					</button>
				)
			)}
		</div>
	);
};

export default QuestionIndicatorComponent;
