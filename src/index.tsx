import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { MyRouter as MyRouter1 } from './Approach1/routes/MyRouter';
import { MyRouter as MyRouter2 } from './Approach2/routes/MyRouter';
import styled from 'styled-components';


const StyledInfo = styled.div` 
position: fixed; 
top: 0; 
right: 0; 
width: 200px; 
background-color: #bbf; 
z-index: 100;
`

ReactDOM.render(
  <React.StrictMode>

    <StyledInfo>Approach: {process.env.REACT_APP_APPROACH}</StyledInfo>
    {process.env.REACT_APP_APPROACH === "1" && <MyRouter1 />}
    {process.env.REACT_APP_APPROACH === "2" && <MyRouter2 />}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
