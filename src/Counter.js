import React, {Component} from 'react';


class Counter extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    onIncrement=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    onDecrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
render(){
    return(
        <div>
            <h1>
                {this.state.count}
            </h1>
            <button onClick={this.onIncrement}>Increment</button>
            <button onClick={this.onDecrement} disabled={this.state.count===0}>Decrement</button>
        </div>
    )
    }
}
export default Counter;