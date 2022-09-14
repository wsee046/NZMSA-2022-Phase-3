import React from "react";
import { Button } from "@mui/material";

interface LinksButtonProps {
    link: string;
    label: string;
}
const LinksButton: React.FC<LinksButtonProps> = (props: LinksButtonProps) => {
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
    const { link, label } = props
    return (
        <Button sx={buttonStyle} variant="contained" href={link}>{label}</Button>
    )
};
export default LinksButton;