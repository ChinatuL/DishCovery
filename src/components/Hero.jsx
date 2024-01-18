import heroImg from "../assets/images/hero.jpg";
const Hero = () => {
    return (
        <div className='relative'>
            <img
                src={heroImg}
                alt=''
                className='brightness-50 object-cover w-full h-[36rem]'
            />
            <div className='absolute z-10 top-0 w-full h-full flex flex-col justify-center items-center px-4'>
                <h1 className='text-center text-white font-medium text-5xl lg:text-6xl w-[15ch]'>
                    Discover a world behind every meal
                </h1>
                <p className='text-center text-white text-xl lg:text-2xl w-[30ch] pt-2'>
                    From global cuisines to local favorites, embark on a
                    delicious journey with us. Let your taste buds lead the way
                </p>
            </div>
        </div>
    );
};
export default Hero;
