import React, { Component } from 'react';
import './App.css';
import QuizMainPage from './Components/QuizPage/QuizMainPage';
import StartPage from './Components/StartPage';
import Results from './Components/ResultsPage/ResultsMainPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/Common.css';

class App extends Component {
	render() {
		return (
			<Router>
				<Route path="/" exact component={StartPage} history={this.props.history} />
				<Route path="/quiz" exact component={QuizMainPage} />
				<Route path="/results" exact component={Results} history={this.props.history} />
			</Router>
		);
	}
}

export default App;
