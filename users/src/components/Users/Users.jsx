import React, { useState, useEffect } from 'react';
import icon from '../Users/user.png'

function Users(id) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(res => setUsers(prev => [...prev, res]))
    }, [])
    return (
        <div>
            <ul className="collection">
                {users.map((user) => <li className="collection-item avatar" key={id}>
                    <img src={icon} alt="" className="circle" />
                    <p><i>Full name: </i>{user.name}</p>
                    <p><i>Nickname: </i>{user.username}</p>
                    <i>Website: </i><a href='#!'>{user.website}</a>
                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>)}
            </ul>
        </div >
    );
}

export default Users;