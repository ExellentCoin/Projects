import React from 'react';
import PersonRender from './PersonRender';

const ListNames = () => {
    const persons = [
        {
            id: 1,
            name: 'mama',
            age: '53',
            rank: 'boss',
        },
        {
            id: 2,
            name: 'david',
            age: '15',
            rank: 'brother',
        },
        {
            id: 3,
            name: 'jonas',
            age: '16',
            rank: 'oldest son',
        },
    ];

    const personList = persons.map(person => <PersonRender key={person.id} person={person} />);
    return personList;
};

export default ListNames;
