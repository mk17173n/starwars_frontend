import React from 'react'

class Music extends React.Component {

state = {

clicked: false

}



start = (e) => {
    this.setState(prevState  => ({
        clicked: !prevState.clicked
    }), () => {
       const audio = new Audio("/starwars.mp3")
        if (this.state.clicked === false) {
       
       audio.pause()
   } 
   else if (this.state.clicked === true){
           audio.play()}})
}

render() {
return (
    <div >
        <button className = "button" onClick = {this.start}> Play Star Wars Theme!</button>
    </div>
)
}

}

export default Music

