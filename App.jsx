import React from 'react';

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
				<h1>{this.state.header}</h1>
				<h1>{this.state.content}</h1>
				<h1>{this.props.headerProp}</h1>
				<h1>{this.props.contentProp}</h1>
				<h1>{this.props.mansiProp}</h1>
				<h1>{this.props.jigarProp}</h1>
				<Header headerProp = {this.state.header}/>
				<table>
					<tbody>
					{this.state.data.map(
						(person,i) => <TableRaw key={i} data = {person} />
					)}
					</tbody>
				</table>
				<Content contentProp = {this.state.content}/>
				<h1 style = {myStyle}>Header</h1>
				<h2>Content</h2>
				<p data-myattribute = "somevalue">This is the content!!!</p>
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

App.defaultProps = {
	mansiProp: "Mansi from props...",
    jigarProp:"Jigar from props..."
}

export default App;