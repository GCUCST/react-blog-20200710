import React, { Component } from 'react'

export default class Header extends Component {


    constructor(props){
        super(props)
        this.state = {
            name:props.name,
            func:props.func
        }
    }
    getName=(abc)=>{
        alert(this.state.name+abc)
        this.state.func()
    }

    render() {
        return (
            <>
            <div style={{border:"1px solid"}} >
                header....{this.state.name}
            </div>
            <button onClick={()=>{
                this.getName("4545")
            }}>点击</button>
            </>
        )
    }
}
