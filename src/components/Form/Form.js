import React from "react";
import {FormHero} from "./FormHero";
import {Steps} from "./Steps";
import {HomeContact} from "../Home/HomeContact";
import {ScrollArrow} from "../ScrollArrow";

export const Form = () => {

    return (
        <>
            <FormHero />
            <Steps />
            <HomeContact />
            <ScrollArrow />
        </>
    );
}