import React, { Component } from 'react'

class LongestWord extends Component {

	constructor(props) {
		super(props)
		this.state = {
			sentence: 'This sentence98%$ has long words',
		}
	}


	longestWord = () => {
		const { sentence } = this.state
		const words = sentence.match(/[a-z0-9]+/gi);
		let max = 0
		let maxIndex = 0
		for(let i = 0; i < words.length; i++) {
			const currentCount = words[i].length
			if(currentCount > max) {
				max = currentCount
				maxIndex = i
			}
		}

		return words[maxIndex];
	}

	render() {
		const { sentence } = this.props

		const answer = this.longestWord()

		console.log(`----\nThe sentence is in this component state, to alter the test case use React dev tools to change state\n-----\n-----\nString:  ${sentence} \n Answer: ${answer}\n-----\n`) 

		return (
			<div className="algorithm__presenter__description">
				<div>Takes a string of words & returns the longest word</div>
				<div>Ignores puncuation but counts numbers</div>
				<div>String will never be empty</div>
				<div className="algorithm__presenter__answer">{answer}</div>
			</div>
		)
	}
}

export default LongestWord
