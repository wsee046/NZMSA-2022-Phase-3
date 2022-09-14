import React from "react";
import { Card, CardContent, Grid, Box } from "@mui/material";
import { getLanguages } from "../utils/countryInfo";
import './CountryCard.css'

interface CountryCardProps {
    countryInfo: any;
}

const CountryCard: React.FC<CountryCardProps> = (props: CountryCardProps) => {
    const { countryInfo } = props;

    return (
        <Card>
            <CardContent
                sx={{
                    height: "360px",
                }}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center">
                    <Grid item>
                        {countryInfo === undefined || countryInfo === null ? (
                            countryInfo === undefined ? (
                                <h2>Enter a country</h2>
                            ) : (
                                <h2>Country Not Found!</h2>
                            )
                        ) : (
                            <div>
                                <Box>
                                    <h2>{countryInfo.name}</h2>
                                    <img height="120px"
                                        style={{ border: "1pt solid rgba(0,0,0,0.1)" }}
                                        src={countryInfo.flags.png}
                                        alt={countryInfo.name.common} />
                                </Box>
                                <Grid item>
                                    <Box>
                                        <p>
                                            Name: {countryInfo.name}
                                            <br />
                                            Region: {countryInfo.region}
                                            <br />
                                            Capital: {countryInfo.capital}
                                            <br />
                                            Population: {countryInfo.population.toLocaleString()}
                                            <br />
                                            Language(s): {getLanguages(countryInfo).toString().replace(",", ", ")}
                                            <br />
                                            Currency: {countryInfo.currencies[0].name}, {countryInfo.currencies[0].symbol}
                                        </p>

                                    </Box>
                                </Grid>
                            </div>
                        )}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default CountryCard;