import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App headerProp = "Header from props...." contentProp= "Contents from props..."/>, document.getElementById('app'));