import React, {Component} from 'react';

class Welcome extends Component{
    constructor(){
        super();
        this.state={
            clicks:0
        }
    }
    onUpdate=()=>{
        this.setState({
            clicks:this.state.clicks+1
        })
    }
    render(){
        return(
            <div>
                <h1 onClick={this.onUpdate}>welcome to {this.props.cname} App Dev - ({this.state.clicks})</h1>
            </div>
        )
    }
}

export default Welcome;