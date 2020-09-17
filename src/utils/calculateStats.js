/*
Calculates the statistics for the quiz attempt an returns the results to be displayed
*/

const calculateStats = value => {
	let correctAnswers = 0;
	let percentageScore = 0;
	let stats = {};
	for (let i = 0; i < value.length; i++) {
		if (value[i]['status'] === 'Correct') {
			correctAnswers = correctAnswers + 1;
		}
	}
	percentageScore = Math.round((correctAnswers / value.length) * 100);

	stats = { correctCount: correctAnswers, percent: percentageScore };
	return stats;
};

export default calculateStats;
