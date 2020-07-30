import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Logout} from "./components/Logout";
import {Form} from "./components/Form/Form";


const App = () => {

    return (
        <div className="App">

            <HashRouter>
                <>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/logout' component={Logout}/>

                    <Route path='/oddaj-rzeczy' component={Form} />
                </>
            </HashRouter>

        </div>
    );
}

export default App;
