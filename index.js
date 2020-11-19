import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
function Welcome(props) {
  return (<div class="div1">
  <div><h4 class="insideText">Employee Name: {props.Emp_name} <br></br>Employee Salary: {props.salary}<br></br>Employee Designation: {props.Designation}<br></br>Employee Company: {props.Company}</h4>
  <input type="text" value={props.Emp_name}></input>
  
  </div>
  </div>
  );
 
}
const employee =<div>
<center> 

  <h1 class="h1">Employee Details</h1>
      <p class="p"> Welcome to the employee details</p>
      </center>
      <Welcome Emp_name="Gaurav" salary='10000' Designation="Developer" Company="Brainworks"/>
   <Welcome Emp_name="Akshay" salary='20000' Designation="QA" Company="Wipro"/>
   <Welcome Emp_name="Satish" salary='30000' Designation="Manager" Company="Exl"/>
   </div>
ReactDOM.render(
  employee,
  document.getElementById('root')

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
