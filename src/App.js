import React from 'react'
import Character from './components/Character'
import './App.css'
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      characters: [
      ]
    }
  }
  async componentDidMount(){
    const request = await fetch("https://thronesapi.com/api/v2/Characters");
    const response = await request.json();
    this.setState({
      characters: response
    })
    console.log(this.state)
    ;
  }
	render() {
		return(
      <div className='main-container'>
			<h1>Game of thrones</h1>
      <ul>
        {this.state.characters.map((character, key) => {
          return <Character 
          name={character.fullName} 
          title={character.title}
          image={character.imageUrl}
          key={key}/>
        })}
      </ul>
      </div>
		)
	}
}

export default App