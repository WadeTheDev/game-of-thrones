const characters = []

const listOfCharacters = async () => {
    const response = await fetch(`https://thronesapi.com/api/v2/Characters`)
    const data = await response.json()
    characters.push(data)
    console.log(data)
  }

  


console.log(characters)