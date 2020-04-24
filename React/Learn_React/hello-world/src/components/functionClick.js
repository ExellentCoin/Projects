import React from 'react';

const Clicked = () => {
    function iClicked() {
        console.log('I clicked!');
    }
    return <button onClick={iClicked}>Click</button>;
};

export default Clicked;
