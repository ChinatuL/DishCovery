import menu1 from "../assets/images/menu1.jpg";
import menu2 from "../assets/images/menu2.jpg";
import recipes1 from "../assets/images/recipes1.jpg";
import recipes2 from "../assets/images/recipes2.jpg";
import wines1 from "../assets/images/wines1.jpg";
import wines2 from "../assets/images/wines2.jpg";
import aboutMenu from "../assets/images/about-menu.jpg";
import aboutRecipes from "../assets/images/about-recipes.jpg";
import aboutWines from "../assets/images/about-wines.jpg";

import {
    FaLocationDot,
    FaEnvelope,
    FaTiktok,
    FaInstagram,
    FaXTwitter,
    FaFacebookF,
    FaYoutube,
} from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

export const images = [menu1, menu2, recipes1, recipes2, wines1, wines2];

export const links = [
    { id: 1, url: "/about", text: "about" },
    { id: 2, url: "/menu", text: "menu" },
    { id: 3, url: "/recipes", text: "recipes" },
    { id: 4, url: "/wines", text: "wines" },
    { id: 5, url: "/newsletter", text: "newsletter" },
];

export const descriptions = [
    "Savor a symphony of tastes that have been carefully chosen for you. Our menu is a culinary journey that will not disappoint, with everything from flavorful appetizers to tantalizing main courses. Every dish has a backstory, and every taste invites you to savor something exceptional. Prepare yourself for a culinary journey; your next mouthwatering dinner is about to arrive.",
    "Unleash your inner chef with our handpicked collection of recipes. Whether you're a kitchen novice or a seasoned pro, our step-by-step guides and insider tips make cooking a breeze. Take your home-cooked meals to a whole new level. Let the joy of creating delicious dishes at home inspire you – because every meal is a masterpiece in the making.",
    "Discover a world of sophistication in every sip. Our carefully curated wine selection brings together the finest vintages to complement your dining experience. From rich reds to crisp whites, each bottle is a testament to the art of winemaking. Cheers to memorable moments and exquisite tastes – find the perfect wine to elevate your DishCovery experience.",
];

export const services = [
    {
        id: 1,
        heading: "culinary exploration",
        image: aboutMenu,
        text: "DishCovery is your passport to a diverse world of cuisines. We curate and celebrate the rich tapestry of global flavors, bringing you a delightful array of dishes from street food gems to gourmet delights.",
    },
    {
        id: 2,
        heading: "recipes hub",
        image: aboutRecipes,
        text: "Empower your inner chef with our carefully curated recipes. Whether you're a novice or an experienced cook, our step-by-step guides and kitchen tips make cooking an enjoyable and rewarding experience.",
    },
    {
        id: 3,
        heading: "wine selection",
        image: aboutWines,
        text: "Elevate your dining experience with our thoughtfully chosen wine selection. Each bottle is a journey in itself, complementing the richness of our dishes to perfection.",
    },
];

export const contactInfo = [
    { id: 1, icon: <FaLocationDot />, text: "Lagos, Nigeria" },
    { id: 2, icon: <BsFillTelephoneFill />, text: "+234 123 4567 8901" },
    { id: 3, icon: <FaEnvelope />, text: "dishcovery.meal@gmail.com" },
];

export const socialLinks = [
    { id: 1, icon: <FaYoutube />, url: "https://www.youtube.com/" },
    { id: 2, icon: <FaXTwitter />, url: "https://www.twitter.com/" },
    { id: 3, icon: <FaTiktok />, url: "https://www.tiktok.com/en/" },
    { id: 4, icon: <FaInstagram />, url: "https://www.instagram.com/" },
    { id: 5, icon: <FaFacebookF />, url: "https://www.facebook.com/" },
];
