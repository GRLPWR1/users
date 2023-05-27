import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import Users from './components/Users/Users.jsx';
import Footer from './components/Footer/Footer.jsx';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

function App() {
  let id = uuidv4();

  const [users, setUsers] = useState([]);
  const [btnClicked, setBtnClicked] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(res => {
        console.log(res);
        setUsers(prev => [...prev, ...res])
      })
      .catch(err => {
        console.warn(err);
        alert("Error! Couldn't fetch users");
      })
  }, [btnClicked])
  console.log('users: ' + users)
  const eventHandler = () => {
    return setBtnClicked = () => {
      return !btnClicked;
    }
  }

  return (
    <div className="App">
      <Header
        eventHandler={eventHandler} />
      <Users
        users={users}
        id={id} />
      <Footer />
    </div>
  );
}

export default App;
