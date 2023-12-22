import SectionTitle from "./SectionTitle";
const LandingSection = ({
    description,
    textOrder,
    imgOrder,
    img1,
    img2,
    alignImg1,
    alignImg2,
    size,
    text,
}) => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className={textOrder}>
                <SectionTitle size={size} text={text} />
                <p className='mt-4 leading-8 text-lg'>{description}</p>
            </div>
            <div className={`flex gap-4 md:flex-col ${imgOrder}`}>
                <img
                    src={img1}
                    alt=''
                    className={`w-1/2 md:w-60 h-40 object-cover rounded-lg ${alignImg1}`}
                />
                <img
                    src={img2}
                    alt=''
                    className={`w-1/2 md:w-60 h-40 object-cover rounded-lg ${alignImg2}`}
                />
            </div>
        </section>
    );
};
export default LandingSection;
