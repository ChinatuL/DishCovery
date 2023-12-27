import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { SectionTitle, Services } from "../components";
import aboutImg from "../assets/images/about.jpg";
import { services } from "../utils/data";

const About = () => {
    return (
        <div className='px-4 py-4 lg:px-20 text-xl leading-8'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-medium pt-4'>About DishCovery</h1>
                <img
                    src={aboutImg}
                    alt=''
                    className='md:h-96 w-full object-cover rounded-lg mt-4'
                />
                <p className='pt-4 text-justify'>
                    Welcome to DishCovery, where passion for food meets the art
                    of exploration. We are more than just a food website; we are
                    your gateway to a world of culinary wonders. Here's a
                    glimpse into who we are, what we do, and the delicious
                    journey that awaits you.
                </p>
            </div>
            <div className='flex flex-col gap-8  pt-8'>
                <section className='flex flex-col gap-4'>
                    <SectionTitle size='text-3xl' text='Who We Are' />
                    <p>
                        At DishCovery, we are a team of food enthusiasts, chefs,
                        and creatives bound by a common love for exceptional
                        flavors. Our mission is to inspire a global community of
                        food lovers to discover, create, and share the joy of
                        extraordinary dining experiences.
                    </p>
                </section>
                <section className='flex flex-col gap-4'>
                    <SectionTitle size='text-3xl' text='Our Mission/Vision' />
                    <p>
                        To be the go-to platform for culinary enthusiasts
                        seeking inspiration, knowledge, and a community to share
                        their love for food.
                    </p>
                    <p>
                        To create a global hub where food transcends borders,
                        bringing people together through the joy of discovery,
                        creation, and shared experiences.
                    </p>
                </section>
                <section className='flex flex-col gap-4'>
                    <SectionTitle size='text-3xl' text='What We Do' />
                    <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12'>
                        {services.map((service) => {
                            return <Services key={service.id} {...service} />;
                        })}
                    </div>
                </section>
                <section className='flex flex-col gap-4'>
                    <SectionTitle
                        size='text-3xl'
                        text="Our NewsLetter"
                    />
                    <p>
                        Stay in the loop with the latest culinary trends,
                        exclusive recipes, and special offers by subscribing to
                        DishCovery's newsletter. Join our growing community of
                        food enthusiasts and never miss a flavorful update.
                    </p>
                    <Link
                        to='/newsletter'
                        className='flex gap-2 items-center bg-zinc-950 text-slate-50 border-2 border-zinc-950 px-4 py-2 rounded-xl w-max hover:bg-transparent hover:text-zinc-950 transition duration-300 ease-in-out'
                    >
                        <span>Subscribe Now</span>
                        <FaArrowRightLong className='inline' />
                    </Link>
                </section>
            </div>
        </div>
    );
};
export default About;
