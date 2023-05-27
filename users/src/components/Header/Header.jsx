import React from 'react';

function Header({ eventHandler }) {


    return (
        <nav>
            <div className="nav-wrapper" style={{ paddingRight: 1 + 'em', paddingLeft: 1 + 'em' }}>
                <h6 className="brand-logo" >Random Users</h6>
                <ul className="right hide-on-med-and-down">
                    <li><button className="waves-effect waves-light btn-large" onclick={() => eventHandler()}>Get 10 random users</button></li>
                </ul>
            </div>
        </nav >
    );
}

export default Header;