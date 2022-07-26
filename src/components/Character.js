import React from 'react'
import '../App.css'

class Character extends React.Component {
	constructor(){
	super()
	}
	render() {
		return(
			<div className="card-container">
			<h2>{this.props.name}</h2>
			<p>{this.props.title}</p>
			<button className='favoritesoff' onClick={this.props.favorites}></button>
			<img src={this.props.image}/>
			</div>
		)
	}
}

export default Character