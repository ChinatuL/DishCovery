import Hero from "../components/Hero";
import { images, descriptions } from "../utils";
import { LandingSection } from "../components";
const Landing = () => {
    return (
        <div>
            <Hero />
            <div className='pt-8 px-6 lg:px-20 flex flex-col gap-8 justify-center items-center'>
                <LandingSection
                    description={descriptions[0]}
                    img1={images[0]}
                    img2={images[1]}
                    alignImg1='md:self-start'
                    alignImg2='md:self-end'
                    size='text-3xl'
                    text='Our Menu'
                />
                <LandingSection
                    description={descriptions[1]}
                    textOrder='md:order-2'
                    imgOrder='md:order-1'
                    img1={images[2]}
                    img2={images[3]}
                    alignImg1='md:self-end'
                    alignImg2='md:self-start'
                    size='text-3xl'
                    text='Our Recipes'
                />
                <LandingSection
                    description={descriptions[2]}
                    img1={images[4]}
                    img2={images[5]}
                    alignImg1='md:self-start'
                    alignImg2='md:self-end'
                    size='text-3xl'
                    text='Our Wines'
                />
            </div>
        </div>
    );
};
export default Landing;
