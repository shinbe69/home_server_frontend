import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../components/Homepage/Homepage";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <Homepage />
                }
            ]
        }
    ]
)