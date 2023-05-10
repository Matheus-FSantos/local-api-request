import React, { useEffect, useState } from 'react';
import './style.css';

function App() {

  const[users, setUsers] = useState([]);

  useEffect(() => {

    function loadApi() {
      let url = 'http://localhost:8080/api/users';
      fetch(url).then((result) => {
        result.json().then((resultJson) => {
          setUsers(resultJson);
        });
      });  
    }

    loadApi();

  }, []);

  function getUsers() {
    console.clear();

    users.forEach((user) => {
      console.log(user);
    })
  }

  return (
    <div className="container">
      <h1 align="center">Back-End test w. GitHub Pages</h1>
      <br/><br/>

      <p align="center">
        <button className="btn btn-outline-light" onClick={getUsers}>All Users</button>
      </p>

      {users.map((user) => (
        <li>{user.name}</li>
      ))}
    </div>
  );
}

export default App;
