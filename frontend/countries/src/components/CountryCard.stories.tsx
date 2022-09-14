import React, { useState } from 'react';
import axios from 'axios';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CountryCard from "./CountryCard";

//👇 This default export determines where your story goes in the story list
export default {

    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'CountryCard',
    component: CountryCard,
} as ComponentMeta<typeof CountryCard>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CountryCard> = (args) => <CountryCard {...args} />;

export const Intial = Template.bind({});

Intial.args = {
    /*👇 The args you need here will depend on your component */
    countryInfo: undefined
};

export const NotFound = Template.bind({});

NotFound.args = {
    countryInfo: null
}
export const NewZealand = Template.bind({});

const NewZealandInfo = {
    "name": "New Zealand",
    "topLevelDomain": [".nz"],
    "alpha2Code": "NZ",
    "alpha3Code": "NZL",
    "callingCodes": ["64"],
    "capital": "Wellington",
    "altSpellings": ["NZ", "Aotearoa"],
    "subregion": "Australia and New Zealand",
    "region": "Oceania",
    "population": 5084300,
    "latlng": [-41.0, 174.0],
    "demonym": "New Zealander",
    "area": 270467.0,
    "timezones": ["UTC-11:00", "UTC-10:00", "UTC+12:00", "UTC+12:45", "UTC+13:00"],
    "nativeName": "New Zealand",
    "numericCode": "554",
    "flags": { "svg": "https://flagcdn.com/nz.svg", "png": "https://flagcdn.com/w320/nz.png" },
    "currencies": [{ "code": "NZD", "name": "New Zealand dollar", "symbol": "$" }],
    "languages": [{ "iso639_1": "en", "iso639_2": "eng", "name": "English", "nativeName": "English" }, { "iso639_1": "mi", "iso639_2": "mri", "name": "Māori", "nativeName": "te reo Māori" }], "translations": { "br": "Zeland-Nevez", "pt": "Nova Zelândia", "nl": "Nieuw-Zeeland", "hr": "Novi Zeland", "fa": "نیوزیلند", "de": "Neuseeland", "es": "Nueva Zelanda", "fr": "Nouvelle-Zélande", "ja": "ニュージーランド", "it": "Nuova Zelanda", "hu": "Új-Zéland" },
    "flag": "https://flagcdn.com/nz.svg",
    "cioc": "NZL",
    "independent": true
}

NewZealand.args = {
    countryInfo: NewZealandInfo
}

