import React from 'react'
import { Card } from 'semantic-ui-react'


class CharacterCard extends React.Component{


  // initial state of Character Card

  state = {
    character: this.props.character,
    likes: this.props.character.likes,
    clicked: false
  }

  //function for handling likes

  handleLike = (e) =>{
   let newCharacter = this.props.character
   let newlike = this.state.likes +1
   this.setState({
     character: newCharacter,
     likes: newlike
   }, 
   () => this.props.addLike(this.state))
  //  console.log(this.state) second argument to deal with async issue
   
    }

    //function to handle click

  handleClick = (e) => {
      this.setState({
        clicked: !this.state.clicked
      })

    }

    //function to handle delete

handleDelete = (e) =>{
 let clickedForDelete = this.props.character
  this.setState({  character: clickedForDelete
  }, () =>this.props.handleDelete(this.state))
}

handleExcitement = (e) =>{
  let object=this.props.character
  let newName = this.props.character.name +"!"
  this.props.handleNewName(newName, object)
}


// conditional rendering and card creation

    render() {
      let {character} = this.props
      let {name, image, characterdescription, actor} = character
      let theInfoToShow = this.state.clicked ?
      <div>
        <p >Actor: {actor.name}</p>
        <p>Actor Description: {actor.actordescription}</p>
      </div>
    :
      null
  
        return (
          <Card>
            <div>
              <div className="image">
                <img onClick={this.handleClick} alt="oh no!"  src={image}/>
              </div>
              <button onClick={this.handleExcitement}>Excitement</button>
              <div className="content">
                <div className="header">{name}</div>
                <button onClick={this.handleDelete}>delete</button>
              </div>
              <div className="extra content">
                <span>
                  <i />
                  {characterdescription}
                  <button onClick={this.handleLike} className = "like"> {this.state.likes} likes</button>
                  
                </span>
              </div>
              {theInfoToShow}
            </div>
          </Card>
        )
      }
    }

export default CharacterCard

