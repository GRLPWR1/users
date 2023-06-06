import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import Users from './components/Users/Users.jsx';
import Footer from './components/Footer/Footer.jsx';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

function App() {

  const [users, setUsers] = useState([]);

  const eventHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => users.map(user => ({ ...user, id: uuidv4() })))
      .then(res => {
        console.log(res);
        setUsers(prev => [...prev, ...res])
      })
      .catch(err => {
        console.warn(err);
        alert("Error! Couldn't fetch users");
      })
  }

  return (
    <div className="App">
      <Header
        eventHandler={eventHandler}
      />
      <Users
        users={users}
      />
      <Footer />
    </div>
  );
}

export default App;
