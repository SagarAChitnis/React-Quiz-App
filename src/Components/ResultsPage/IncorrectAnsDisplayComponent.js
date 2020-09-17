/*
This component renders the incorrect answer on the summary page
*/

import React from 'react';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IncorrectAnsDisplayComponent = props => {
	return (
		<div>
			<div className="question-status">
				<table>
					<tr>
						<td>
							<strong>
								Question {props.result['id']}: {props.result['question'].question}
							</strong>
						</td>
						<td>
							{/* Show the incorrect sign */}
							<FontAwesomeIcon icon={faTimesCircle} size="2x" color="red" />
						</td>
					</tr>
				</table>
			</div>
			<table className="incorrect-question-options" cellSpacing="0px">
				<tr className="table-row">
					<td>
						<p>
							<strong>Your Answer:</strong> {props.result['your_answer']}
						</p>
					</td>
					<td>
						<p>
							<strong>&nbsp; &nbsp;Correct Answer:</strong> {props.result['correct_answer']}
						</p>
					</td>
				</tr>
			</table>
			<hr />
		</div>
	);
};

export default IncorrectAnsDisplayComponent;
