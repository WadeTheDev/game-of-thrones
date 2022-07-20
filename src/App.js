import React from 'react'
import Character from './components/Character'
import Continent from './components/Continent'
import './App.css'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      favorites: [],
      continents: [],
      characterOrContinent: "character"
    }

  }
  async componentDidMount() {
    const request = await fetch("https://thronesapi.com/api/v2/Characters");
    const response = await request.json();

    const request2 = await fetch("https://thronesapi.com/api/v2/Continents");
    const response2 = await request2.json();
    this.setState({continents: response2, characters: response});
  }

   handleFavoriteClick = (card) => {
    const favoritesClone = [ ...this.state.favorites ]
    favoritesClone.push(card)
    this.setState({favorites: favoritesClone})
    console.log(this.state.favorites)
  }

  changeScreen = () => {
    if (this.state.characterOrContinent === "character") {
      this.setState({ characterOrContinent: "continent"})
    }
    if (this.state.characterOrContinent === "continent") {
      this.setState({ characterOrContinent: "character"})
    }
    console.log(this.state.characterOrContinent)
    console.log(this.state.continents)
  }

  render() {
    return (
      <div className='main-container'>
        <h1>Game of thrones</h1>
        <button className='changes' onClick={this.changeScreen}>Change</button>
        {this.state.characterOrContinent === "character" ? (
          <ul>
          {this.state.characters.map((character, key,i) => {
            return <Character
              favorites={() => this.handleFavoriteClick(character)}
              name={character.fullName}
              title={character.title}
              image={character.imageUrl}
              key={key} />
          })}
        </ul>) : (
          <div>
          <h3>Continents</h3>
           <ul>
           {this.state.continents.map((continent, key,) => {
             return <Continent
               favorites={() => this.handleFavoriteClick(continent)}
               name={continent.name}
               key={key} />
           })}
         </ul>
         </div>
        )}
        
      </div>
    )
  }
}

export default App