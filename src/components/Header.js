import React from 'react';

const Header = (props) => {
    const { timestamp } = props;

    return (
        <div style={{ height: 60, textAlign: 'center' }} >
            <h1>Header - {timestamp}</h1>
        </div>
    );
}

export default Header;