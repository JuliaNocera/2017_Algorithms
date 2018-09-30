import React from 'react'
import { Link } from 'react-router-dom'

export const RenderLink = () => (
	<div className="links">
		<Link to="/longestWord">Longest Word</Link>
		<Link to="/next">Next</Link>
		<Link to="/">Home</Link>
	</div>
)
