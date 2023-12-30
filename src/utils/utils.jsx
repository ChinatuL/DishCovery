import axios from "axios";

const productionUrl = "https://api.spoonacular.com";

export const customFetch = axios.create({
    baseURL: productionUrl,
});

export const apiKey = import.meta.env.VITE_API_KEY;
