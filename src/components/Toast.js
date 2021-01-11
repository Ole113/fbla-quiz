import React from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Configures the toast module.
toast.configure();

/**
 * Renders a toast with the specified error message.
 * @param {String} message The error message.
 */
export function Toast(message) {
    //Makes a toast using react-toastify
    toast.error(
        <div>
            <img id="errorImage" src={require("../assets/images/error.svg").default} alt="Error loading image." />
                    &nbsp; {message}
        </div>, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}