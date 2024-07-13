import React, { Component } from 'react'

export class Wheel extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
      <div style={styles.wheel}>Wheel</div>
    )
  }
}


const styles ={
    wheel:{
     position:'absolute',
     top:"50%",
     left:"50%",
     tranfrom:"tranlate(-50%, -50%)",
     height:"300px",
     width:"300px",
     backgroundColor:'red'
    }
}
export default Wheel