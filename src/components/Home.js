import React from "react";
import {HomeHeader} from "./HomeHeader";
import {HomeTreeColumns} from "./HomeThreeColumns";


export const Home = () => {

    return (
        <div className='home'>

            <HomeHeader/>

            <h1>Hello</h1>

            <HomeTreeColumns/>

        </div>
    );
}