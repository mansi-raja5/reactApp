import React from 'react';

class Header extends React.Component{
	render(){
		return(
			<div>
					<h1> This is react header component </h1>
			</div>
		);
	}
}

class Content extends React.Component{
	render(){
		return(
			<div>
					<h1> This is react content component </h1>
			</div>
		);
	}
}

class App extends React.Component{
	render(){
		var i = 1;
		
		var myStyle = {
			fontSize: 100,
			color : "red"
		};
		
		return(
			<div>
				<Header/>
				<Content/>
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
export default App;