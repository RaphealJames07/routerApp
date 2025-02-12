import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {ToastContainer} from "react-toastify";
import ContextProvider from "./global/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ContextProvider>
            <ToastContainer />
            <App />
        </ContextProvider>
    </StrictMode>
);
