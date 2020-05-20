import React from "react"
import CharacterCollection from './CharacterCollection'
import CharacterForm from './CharacterForm'
import Search from './Search'
import {Container} from "semantic-ui-react"
import Music from './MusicComponent'

class StarWarsPage extends React.Component {

//initial state of component

state = {
characters: [],
searchTerm: "",
likes: 0
}


//when component mounts backend data is fetched 

componentDidMount() {

    fetch("http://localhost:3000/characters")
    .then(r => r.json())
    .then((resp) => {
      this.setState({
        characters: resp
      })
    })
}

//function for filtering array based on search sent to  character collection.

functionReturnFilteredArray = () => {
  let filteredArray =this.state.characters.filter(character => {
    return  character.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
  })
  return filteredArray 
}


// function to handle search term based on string sent up from search component

handleSearchTerm =(string) => {
  this.setState({
    searchTerm: string
  })
}

handleNewName =(newName, object) => {
console.log(newName)
console.log(object)
let array =this.state.characters.map(character => {
  if (character.id === object.id) {
    character.name = newName
  
  }
  return character
} )
this.setState({
  characters: array
})
}
 
//function to handle object sent up from card component which helps updates like in patch request

addLike = (cardObject) => {
  console.log("card object", cardObject)
  let{likes} = cardObject
  let id = cardObject.character.id
  fetch(`http://localhost:3000/characters/${id}`, {
    method: "PATCH",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
        likes: likes
  })
  })
    .then(r => r.json())
    .then(newCharacter => {
   
        this.setState({
          likes: newCharacter.likes,
        })
      })

}

//function to add Character object sent up from card component which helps add a new character

addOneCharacter = (characterObj) => {

  fetch("http://localhost:3000/characters", {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(characterObj)
  })
    .then(r => r.json())
    .then(newCharacter => {
      let newArray = [...this.state.characters, newCharacter]
      this.setState({
        characters: newArray
      })
    })

}

//function to handleDelete based on click from card component

handleDelete = (deleteObj) =>{
  console.log(deleteObj)
  let {id} =deleteObj.character
  fetch(`http://localhost:3000/characters/${id}`, {
    method: "DELETE"

  })
  .then(r => r.json())
  .then(deletedCharacter => {  
    let deletedCharacterId = deletedCharacter.id
   let newArray= this.state.characters.filter(character =>character.id !== deletedCharacterId )
   this.setState({
     characters: newArray
   })
  })
}


//render for class component which renders child components and sends functions down as props

render() {
return(
  <Container>
  <h1 className = "text">Star Wars Battlefront II</h1>
  <Music />
  <br />
  <CharacterForm addOneCharacter = {this.addOneCharacter} />
  <br />
  <Search searchTerm={this.state.searchTerm} handleSearchTerm={this.handleSearchTerm} />
  <br />
  <CharacterCollection  handleNewName = {this.handleNewName} characters={this.functionReturnFilteredArray()}  addLike = {this.addLike}  handleDelete ={this.handleDelete}/>
  </Container>
)}


}

export default StarWarsPage




