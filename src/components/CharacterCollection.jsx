import React from 'react'
import CharacterCard from './CharacterCard'
import { Card } from 'semantic-ui-react'


//component that inherits props and maps each character attribute to Character Card

class CharacterCollection extends React.Component {
    render() {
    let arrayOfComponents = this.props.characters.map(character => {return <CharacterCard key={character.id} handleNewName ={this.props.handleNewName} character={character} likes = {character.likes} addLike= {this.props.addLike} handleDelete ={this.props.handleDelete}/>
    })


        return (
          <Card.Group itemsPerRow={6}>
            {arrayOfComponents}
          </Card.Group>
        )
      }
    }




export default CharacterCollection