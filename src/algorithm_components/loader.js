import React, { Component } from 'react'

import LongestWord from './longestWord';
import { Next } from './next'

class AlgorithmsPresenter extends Component {
	renderAlgorithm = (component) => {
		switch(component) {
			case '/longestWord': return (<LongestWord />)
			case '/next': return (<Next />)
			default: throw new Error(`${component} not found in presenter`)
		}
	}

	render() {
		const { match } = this.props
		return (
			<div>
				<h2 className="app__header">Algorithms</h2>
				<div>{this.renderAlgorithm(match.path)}</div>
			</div>
		)
	}
}

export default AlgorithmsPresenter 