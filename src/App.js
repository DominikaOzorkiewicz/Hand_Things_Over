import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";
import {Home} from "./components/Home";
import {Login} from "./components/Login";
import {Register} from "./components/Register";


const App = () => {

    return (
        <div className="App">

            <HashRouter>
                <>
                    <Route exact path='/' component={Home}/>
                    <Route path='login' component={Login}/>
                    <Route path='register' component={Register}/>
                </>
            </HashRouter>

        </div>
    );
}

export default App;
