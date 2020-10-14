
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom'

// BrowserRouter => Needs to be wrapped around the entire application and it makes available react-router-dom's functionality
// Link => react-router's analog to the a tag. Swaps the out url out for the new url designated by the 'to' attribute
// Route => Conditionally render components if the url matches the Route Component's path

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

