import React,{Component, Fragment} from 'react';



class Comp1 extends Component{
    constructor(){
        super();
        this.state={
            greeting:'',
            name:''
        }
    }
    onNameChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            name:e.target.value
        })
    }
    onGenerate=()=>{
        this.setState({
            greeting: `happy birthday to mr ${this.state.name}`
        })
    }
    render(){
        return(
            <Fragment>
                <h1>Greeting Generator</h1>
                <input type="text" name="name" onChange={this.onNameChange} />
                <button onClick={this.onGenerate}>onGenerate</button>
                <h2>{this.state.greeting}</h2>
                </Fragment>
        )
    }
}

export default Comp1;