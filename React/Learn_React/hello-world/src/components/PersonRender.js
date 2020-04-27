import React from 'react';

const PersonRender = ({ person: { name }, person: { age }, person: { rank } }) => {
    return (
        <h1>
            My name is {name}. I am {age} years old and I am the {rank}
        </h1>
    );
};

export default PersonRender;
