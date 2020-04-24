import React from 'react';

const Greet = ({ name, test, children }) => {
    return (
        <div>
            <h1>
                Hello {name} and {test}
            </h1>
            {children}
        </div>
    );
};

export default Greet;
