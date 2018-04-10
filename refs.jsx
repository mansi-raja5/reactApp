import React from 'react';
import ReactDOM from 'react-dom';

class Refs extends React.Component{
    constructor(props){
        debugger;
        super(props);

        this.state = {
            data : ""
        }

        this.updateState = this.updateState.bind(this);
        this.clearInput  = this.clearInput.bind(this);
    };

    updateState(e){
        this.setState({data:e.target.value});
    }

    clearInput(){
        this.setState({data:""});
        ReactDOM.findDOMNode(this.refs.myInput).focus()
    }

    render(){
        return (
            <div>
                <input type="text" value={this.state.data}
                       onChange={this.updateState}
                       ref="myInput"></input>
                <br/>
                    <input type="text" value={this.state.data}
                           onChange={this.updateState}
                           ref="myInput"></input>
                    <br/>

                <button onClick={this.clearInput}> CLEAR</button>
            </div>
        );
    }
}
export default Refs;