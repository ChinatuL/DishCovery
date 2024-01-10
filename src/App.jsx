import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
import { loader as RecipeLoader } from "./pages/Recipe";
import { loader as RecipesLoader } from "./pages/Recipes";
import { loader as MenuLoader } from "./pages/Menu";
import { loader as WinesLoader } from "./pages/Wines";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
        },
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
                loader: LandingLoader(queryClient),
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "menu",
                element: <Menu />,
                loader: MenuLoader(queryClient),
            },
            {
                path: "menu/:id",
                element: <MenuItem />,
            },
            {
                path: "recipes",
                element: <Recipes />,
                loader: RecipesLoader(queryClient),
            },
            {
                path: "recipes/:id",
                element: <Recipe />,
                loader: RecipeLoader(queryClient),
            },
            {
                path: "wines",
                element: <Wines />,
                loader: WinesLoader(queryClient),
            },
            {
                path: "wines/:id",
                element: <Wine />,
            },
            {
                path: "newsletter",
                element: <NewsLetter />,
            },
        ],
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
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
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
