import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Logout} from "./components/Logout";


const App = () => {

    return (
        <div className="App">

            <HashRouter>
                <>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/logout' component={Logout}/>
                </>
            </HashRouter>

        </div>
    );
}

export default App;
