import React from "react";
import axios from 'axios';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import CountryCard from './CountryCard';
import './CountrySearch.css';
import LinksButton from "./LinksButton";

const CountrySearch: React.FC = () => {
    const [country, setCountry] = useState("");
    const [countryInfo, setCountryInfo] = useState<null | undefined | any>(undefined);

    const COUNTRIES_BASE_URL = "https://restcountries.com/v2";

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
                <TextField
                    id="search-box"
                    className="text"
                    value={country}
                    label="Enter a country"
                    variant="outlined"
                    onChange={(prop: any) => {
                        setCountry(prop.target.value);
                    }}
                    placeholder="Search..."
                    size="small" />
                <IconButton
                    aria-label="search"
                    onClick={() => {
                        search();
                    }}>
                    <SearchIcon style={{ fill: "blue" }} />
                </IconButton>
            </div>
            <div
                style={{
                    maxWidth: "520px",
                    margin: "0 auto",
                    padding: "20px 10px 20px 10px",
                }}>
                <CountryCard countryInfo={countryInfo} />
            </div>
        </div >
    );

    function search() {
        if (country === undefined || country.trim() === "") {
            setCountryInfo(undefined);
            return;
        }
        axios.get(COUNTRIES_BASE_URL + "/name/" + country.trim() + "?fullText=true").then((res) => {
            console.log(res.data[0]);
            setCountryInfo(res.data[0]);
        }).catch(() => {
            setCountryInfo(null);
        });

    }
};

export default CountrySearch;