import './App.css';
import { Box, Button } from "@mui/material";
import CountrySearch from './components/CountrySearch';
import LinksButton from './components/LinksButton';

function App() {
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
      <CountrySearch />
      <Box textAlign="center">
        <LinksButton link="https://www.usnews.com/news/best-countries/rankings" label="Best Countries in the World" />
        <LinksButton link="https://facts.net/country-facts/" label="100 Country Facts" />
        <LinksButton link="https://www.farandwide.com/s/most-fun-countries-40b97d2a3fb54b67" label="Most fun Countries" />
        <Button sx={buttonStyle} variant="contained" href="https://worldpopulationreview.com/country-rankings/richest-countries-in-the-world">Richest Countries</Button>
        <Button sx={buttonStyle} variant="contained" href="https://www.worldometers.info/geography/largest-countries-in-the-world/">Largest Countries</Button>
        <Button sx={buttonStyle} variant="contained" href="https://www.berlitz.com/blog/most-spoken-languages-world">Most Spoken Languages</Button>
      </Box>
    </div >
  )
}

export default App;
