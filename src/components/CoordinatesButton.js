// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    constructor(){
        super()
       
    }
    handleOnClick=(event) => {
        
           let arrayElements=[event.clientX,event.clientY]
          this.props.onReceiveCoordinates(arrayElements)
         
   
        

    }

    
  
    
    render() {
        return (
            <div>
                <button onClick={this.handleOnClick}></button>
            </div>
        )
    }
}
