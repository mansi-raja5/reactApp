import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import MyComp from "./myComp.jsx";
import Form from "./form.jsx";
import Event from "./event.jsx";
import Refs from "./refs.jsx";
import Keys from "./keys.jsx";

ReactDOM.render(<App headerProp = "Header from props...." contentProp= "Contents from props..."/>, document.getElementById('app'));

ReactDOM.render(<MyComp/>, document.getElementById('mycomp'));

ReactDOM.render(<Form/>,document.getElementById('myform'));

ReactDOM.render(<Event/>,document.getElementById('myevents'));

ReactDOM.render(<Refs/>,document.getElementById('myrefs'));

ReactDOM.render(<Keys/>,document.getElementById('mykeys'));
