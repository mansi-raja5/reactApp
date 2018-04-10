import React from 'react';

class Event extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: 'Initial data'
        }

        this.updateState = this.updateState.bind(this);
    };

    updateState()
    {
        this.setState({data : 'Data Updated from child component..........'})
    }

    render(){
        return (
            <div>

                <Content dataProp={this.state.data} updateStateProp={this.updateState}></Content>
            </div>
        );
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.updateStateProp}> click</button>
                <h3>{this.props.dataProp}</h3>
            </div>
        )
    }
}
export default Event;