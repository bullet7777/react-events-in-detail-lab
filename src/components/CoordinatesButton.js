// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    constructor(){
        super()
        this.state={
            mouseCoardinates:props.value
        }

    }
    handleOnClick=(event) => {
        this.setState({
             arrayElement=[
                event.clientX,
                event.clientY
            ]
         
        })
        

    }

    
  
    
    render() {
        return (
            <div>
                <button onClick={this.handleOnClick}></button>
            </div>
        )
    }
}
