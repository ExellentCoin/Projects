import React from 'react';
import './App.css';
import Message from './components/Message';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import ClickFunction from './components/ClickFunction';
import ClickClass from './components/ClickClass';
import BindEventHandler from './components/BindEventHandler';
import ParentComponent from './components/ParentComponent';
import ConditionalRender from './components/ConditionalRender';
import ListNames from './components/ListNames';
import FormHandler from './components/FormHandler';

const App = () => {
    return (
        <div className='App'>
            <FormHandler />
        </div>
    );
};

export default App;
