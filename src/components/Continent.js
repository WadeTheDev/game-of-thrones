import React from 'react'
import '../App.css'

class Continent extends React.Component {
	constructor(){
	super()
	}
	render() {
		return(
			<div className="card-container">
			<h2>{this.props.name}</h2>
			<button className='favoritesoff' onClick={this.props.favorites}></button>
			</div>
		)
	}
}

export default Continent