/*
This component renders the correct answer on the summary page
*/

import React from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CorrectAnsDisplayComponent = props => {
	return (
		<div className="question">
			<div className="question-status">
				<table>
					<tr>
						<td>
							<strong>
								Question {props.result['id']}: {props.result['question'].question}
							</strong>
						</td>
						<td>
							{/* Show the correct sign (tickmark) */}
							<FontAwesomeIcon icon={faCheckCircle} size="2x" color="green" />
						</td>
					</tr>
				</table>
			</div>
			<p>
				<strong>Your Answer:</strong> {props.result['your_answer']}
			</p>
			<hr />
		</div>
	);
};

export default CorrectAnsDisplayComponent;
