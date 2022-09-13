import axios from 'axios';
import { useState } from 'react';
import './App.css';
import IconButton from '@mui/material/IconButton';
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Grid, Paper, Button, styled } from "@mui/material";
import CountryCard from './components/CountryCard';

function App() {
  const [country, setCountry] = useState("");
  const [countryInfo, setCountryInfo] = useState<null | undefined | any>(undefined);

  const COUNTRIES_BASE_URL = "https://restcountries.com/v2";
  const buttonStyle = {
    color: "white",
    width: {
      xs: "300px",
      sm: "260px",
      md: "220px",
      lg: "180px",

    },
    height: {
      xs: "25px",
      sm: "50px",
    },
    textAlign: "center",
    margin: {
      xs: "2px",
      sm: "6px"
    },
    fontSize: {
      xs: "10px",
      sm: "12px",
    },
  }
  return (
    <div>
      <h1 style={{ marginLeft: "2%" }}>Country Search</h1>
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
      <div id="country-result"
        style={{
          maxWidth: "520px",
          margin: "0 auto",
          padding: "20px 10px 20px 10px",
        }}>
        <CountryCard countryInfo={countryInfo} />
      </div>
      <Box textAlign="center">
        <Button sx={buttonStyle} variant="contained" href="https://www.usnews.com/news/best-countries/rankings">Best Countries in the World</Button>
        <Button sx={buttonStyle} variant="contained" href="https://facts.net/country-facts/">100 Country Facts</Button>
        <Button sx={buttonStyle} variant="contained" href="https://www.farandwide.com/s/most-fun-countries-40b97d2a3fb54b67">Most fun Countries</Button>
        <Button sx={buttonStyle} variant="contained" href="https://worldpopulationreview.com/country-rankings/richest-countries-in-the-world">Richest Countries</Button>
        <Button sx={buttonStyle} variant="contained" href="https://www.worldometers.info/geography/largest-countries-in-the-world/">Largest Countries</Button>
        <Button sx={buttonStyle} variant="contained" href="https://www.berlitz.com/blog/most-spoken-languages-world">Most Spoken Languages</Button>
      </Box>
    </div >
  )

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
}

export default App;
