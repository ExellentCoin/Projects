import React from 'react';

const ChildComponent = props => {
    return (
        <div>
            <button onClick={() => props.talkHandler('Jonas')}>
                Talk to parent!
            </button>
        </div>
    );
};

export default ChildComponent;
