import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from "./CryptoContext";
import 'react-alice-carousel/lib/alice-carousel.css';

ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
      <App />

    </CryptoContext>
    
  </React.StrictMode>,
  document.getElementById("root")
);






// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


