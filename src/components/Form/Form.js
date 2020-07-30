import React from "react";
import {FormHero} from "./FormHero";
import  {Steps} from "./Steps";
import {HomeContact} from "../Home/HomeContact";

export const Form = () => {

    return (
        <>
            <FormHero />
            <Steps/>
            <HomeContact />
        </>
    );
}