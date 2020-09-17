/* 
Creates and returns an object that checks the user's answers against the correct answer.
*/

const getResult = value => {
	const summary = [];
	let index;
	for (index = 0; index < value.answeredQuestions.length; index++) {
		// Correct Answer
		if (value.answeredQuestions[index] === value.firebaseQuestions[index].answer) {
			summary.push({
				status: 'Correct',
				id: value.firebaseQuestions[index].id,
				question: value.firebaseQuestions[index],
				your_answer: value.answeredQuestions[index],
				correct_answer: value.firebaseQuestions[index].answer,
			});
		} else {
			// Incorrect Answer
			summary.push({
				status: 'Incorrect',
				id: value.firebaseQuestions[index].id,
				question: value.firebaseQuestions[index],
				your_answer: value.answeredQuestions[index],
				correct_answer: value.firebaseQuestions[index].answer,
			});
		}
	}
	return summary;
};

export default getResult;
