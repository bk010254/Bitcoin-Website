import React from 'react';
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {AppBar, Container, Toolbar, Typography, Select, MenuItem} from "@material-ui/core";
import {
    createTheme,
    makeStyles,
    ThemeProvider,
  } from "@material-ui/core/styles";
import { CryptoState } from '../CryptoContext';


const useStyles = makeStyles((theme) => ({
    title: {
      flex: 1,
      color: "gold",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  }));

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  
  

const Header = () => {
    const classes = useStyles();

    // const history = useHistory();
    const navigate = useNavigate();
    const redirect = () => {
        navigate("/");
        };
        const { currency, setCurrency} = CryptoState();
        console.log(currency);

  return (
    <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
                <Typography  onClick={redirect} className={classes.title} variant="h6">
                Cryptocurrency Market
                </Typography>
                <Select variant='outlined' style={{width:100, height: 40, marginReft: 15,}} value={currency} onChange={(e) => setCurrency(e.target.value)}>
                
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"INR"}>NIR</MenuItem>
                </Select>
            </Toolbar>
        </Container>

        </AppBar>
        </ThemeProvider>
    
  )
}

export default Header