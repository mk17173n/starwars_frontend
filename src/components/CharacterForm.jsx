import React from 'react'
import { Form } from 'semantic-ui-react'

class CharacterForm extends React.Component {
  
  state = {
      charactername: '',
      characterdescription: '',
      image: '',
      actorname: '',
      actordescription: ''
    }
  

  handleAllInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addOneCharacter(this.state)
    this.setState({
      charactername: '',
      characterdescription: '',
      image: '',
      actorname: '',
      actordescription: ''
    })
  }



  render() {
    return (
      <div>
        <h3 className = "text">Add a Character!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Character Name" placeholder="Character Name" name="charactername"  onChange={this.handleAllInput} value={this.state.charactername}/>
            <Form.Input fluid label="Character Description" placeholder="character description" name="characterdescription" onChange={this.handleAllInput} value={this.state.characterdescription}/>
            <Form.Input fluid label="Character Image URL" placeholder="url" name="image" onChange={this.handleAllInput}  value={this.state.image}/>
            <Form.Input fluid label="Actor Name" placeholder="Actor Name" name="actorname" onChange={this.handleAllInput} value={this.state.actorname} />
            <Form.Input fluid label="Actor Description" placeholder="Actor Description" name="actordescription" onChange={this.handleAllInput}  value={this.state.actordescription}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default CharacterForm