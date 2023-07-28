import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "./Context/AuthContext";
import { Provider } from "react-redux";
import store from "./Redux/store";
import CityContextProvider from "./Context/CityContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ChakraProvider>
      <CityContextProvider>
        <Provider store={store}>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </Provider>
      </CityContextProvider>
    </ChakraProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
reportWebVitals();
