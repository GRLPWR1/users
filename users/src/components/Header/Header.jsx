import React from 'react';

function Header() {
    return (
        <nav>
            <div className="nav-wrapper">
                <h1 className="brand-logo" style={{ marginLeft: 0.5 + 'em' }}>Random Users</h1>
                <ul className="right hide-on-med-and-down">
                    <li><a style={{ marginTop: 0.5 + 'em' }} className="waves-effect waves-light btn-large">Get 10 random users</a></li>
                </ul>
            </div>
        </nav >
    );
}

export default Header;