import React from 'react';

const ClickFunction = () => {
    function iClicked() {
        console.log('I clicked!');
    }
    return <button onClick={iClicked}>Click</button>;
};

export default ClickFunction;
