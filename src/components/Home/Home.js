import React from "react";
import {HomeHero} from "./HomeHero";
import {HomeThreeColumns} from "./HomeThreeColumns";
import {HomeAbout} from "./HomeAbout";
import {HomeSimpleSteps} from "./HomeSimpleSteps";
import {HomeOrganizations} from "./HomeOrganizations";
import {HomeContact} from "./HomeContact";
import {ScrollArrow} from "../ScrollArrow";


export const Home = () => {

    return (
        <div className='home'>
            <HomeHero />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAbout />
            <HomeOrganizations />
            <HomeContact />
            <ScrollArrow />
        </div>
    );
}