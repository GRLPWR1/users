import React from 'react';

function Header() {
    return (
        <nav>
            <div className="nav-wrapper">
                <title className="brand-logo" >Random Users</title>
                <ul className="right hide-on-med-and-down">
                    <li><a className="waves-effect waves-light btn-large">Get 10 random users</a></li>
                </ul>
            </div>
        </nav >
    );
}

export default Header;