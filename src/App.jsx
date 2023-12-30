import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
    About,
    Error,
    HomeLayout,
    Landing,
    Menu,
    MenuItem,
    NewsLetter,
    PrivacyPolicy,
    Recipes,
    Recipe,
    TermsOfUse,
    Wine,
    Wines,
} from "./pages";

import { loader as LandingLoader } from "./pages/Landing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
                loader: LandingLoader,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "menu",
                element: <Menu />,
            },
            {
                path: "menu/:id",
                element: <MenuItem />,
            },
            {
                path: "recipes",
                element: <Recipes />,
            },
            {
                path: "recipes/:id",
                element: <Recipe />,
            },
            {
                path: "wines",
                element: <Wines />,
            },
            {
                path: "wines/:id",
                element: <Wine />,
            },
        ],
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
        errorElement: <Error />,
    },
    {
        path: "/newsletter",
        element: <NewsLetter />,
        errorElement: <Error />,
    },
    {
        path: "terms-of-use",
        element: <TermsOfUse />,
        errorElement: <Error />,
    },
]);

function App() {
    return (
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    );
}

export default App;
