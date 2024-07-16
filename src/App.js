import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import { makeStyles } from "@material-ui/core";

function App() {
  const useStyles = makeStyles(() => ({
    root: {
      backgroundColor: "#41B3A3",
      // backgroundColor: "#222629",
      color: "white",
      minHeight: "100vh"
    },
  }));

  const classes = useStyles();



  return (
  <BrowserRouter>
      <div className={classes.root}>
        <Header />
        <Routes>
        <Route path='/' element={<Homepage />}  exact />
        <Route path='/coins/:id' element={<CoinPage />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
