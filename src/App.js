import React from 'react';
import './index.css';


function App() {

  const date = '20th of December 2021';

  const users = [
    {id: 1, firstName: 'Alice', lastName: 'Smith', age: 25, city: 'Los Angeles', active: true},
    {id: 2, firstName: 'Mary', lastName: 'Adams', age: 28, city: 'San Diego', active: true},
    {id: 3, firstName: 'Bob', lastName: 'Brown', age: 15, city: 'New York', active: false},
  ];

  const fullUserName = (user) => {
    return user.firstName + ' ' + user.lastName
  }

  const isUserAdult = (user) => {
    if (user.age <= 18) {
      return <b>'No'</b>
    }
    return <b>'Yes'</b>
  }

  return (
      <div>
        <h1>List of users information</h1>
        {date}
        <hr/>
        {users.map(el =>
            <div>
              <h2>{fullUserName(el)}</h2>
              <ul>
                <li>Age: {el.age}</li>
                <li>City: {el.city}</li>
                <li>Is user adult: {isUserAdult(el)}</li>
                <li style={el.active ? {} : {textDecoration: 'line-through'}}>User is active</li>
              </ul>
              <hr/>
            </div>
        )}
      </div>
  );
}

export default App;