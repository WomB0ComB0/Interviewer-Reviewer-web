import React from 'react';
import App from '../../Global/Components/App';

const VerticalNav = () => {
    return (
        <div className="vertical-nav">
            <div className="logo container">
                <a href="." className="logo clickable">
                    <img src="/images/logo.png" alt="logo" />
                    <h1 className="nav-text">
                        Interviewer Reviewer
                    </h1>
                </a>
            </div>
        </div>
        // <div>
        //     <App />
        // </div>
    )
}

export default VerticalNav;