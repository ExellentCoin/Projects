import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import ClickFunction from './components/ClickFunction';
import ClickClass from './components/ClickClass';
import BindEventHandler from './components/BindEventHandler';
import ParentComponent from './components/ParentComponent';

function App() {
    return (
        <div className="App">
            <ParentComponent />
        </div>
    );
}

export default App;
