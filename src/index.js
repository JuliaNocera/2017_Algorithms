import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import AlgorithmsPresenter from './algorithm_components/loader'
import Next from './algorithm_components/next'

import { BrowserRouter as Router, Route } from 'react-router-dom'


ReactDOM.render(
	<Router>
		<div>
			<Route path='/' component={App}/>
			<Route path='/longestWord' component={AlgorithmsPresenter}/>
			<Route path='/next' component={AlgorithmsPresenter}/>
		</div>
	</Router>
, document.getElementById('root'));
