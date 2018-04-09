import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			 header: "Header from state and passed as a props...",
			 content: "Content from state and passed as a props...",			
			data : 
			[
				{
					"id":1,
					"name":"Foo",
					"age":10
				},
				{
					"id":2,
					"name":"bar",
					"age":20
				},
				{
					"id":3,
					"name":"baz",
					"age":30
				},				
			]
		}
	}
	render(){
		var i = 1;
		
		var myStyle = {
			fontSize: 100,
			color : "red"
		};
		
		return(
			<div>
                Hello World!
                <br/>
                Mansi Raja
                <br/>
                2+2 = {2+2}
                <br/>
                2*4 = {2*4}
                <br/>
                <br/>
                {i==1 ? "i is having 1 value" : "no value"}
                <h1 style = {myStyle}>Header</h1>
                <h2>Content</h2>
                <p data-myattribute = "somevalue">This is the content!!!</p>


				<Header headerProp = {this.state.header}/>
				<table>
					<tbody>
					{this.state.data.map(
						(person,i) => <TableRaw key={i} data = {person} />
					)}
					</tbody>
				</table>
				<Content contentProp = {this.state.content}/>


                <h1>{this.state.header}</h1>
                <h1>{this.state.content}</h1>
                <h1>{this.props.headerProp}</h1>
                <h1>{this.props.contentProp}</h1>
                <h1>{this.props.mansiProp}</h1>
                <h1>{this.props.jigarProp}</h1>

                =================================================
                <h1> Hello, {this.props.name} </h1>
                <h3>Array: {this.props.propArray}</h3>
                <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
                <h3>Func: {this.props.propFunc(3)}</h3>
                <h3>Number: {this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>
			</div>
		);
	}
}

class Header extends React.Component{
	render(){
		return(
			<div>
					<h1> {this.props.headerProp} </h1>
			</div>
		);
	}
}

class TableRaw extends React.Component{
	render(){
		return(
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>
		);
	}
}

class Content extends React.Component{
	render(){
		return(
			<div>
					<h1> {this.props.contentProp} </h1>
			</div>
		);
	}
}

App.propTypes = {
    name: PropTypes.string,
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
};
App.defaultProps = {
    name: 'Tutorialspoint.com',
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function(e) {
        return e
    },
    propNumber: 1,
    propString: "String value...",
    mansiProp: "Mansi from props...",
    jigarProp:"Jigar from props..."
}
export default App;