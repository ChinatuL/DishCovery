const Services = ({ heading, image, text }) => {
    return (
        <div>
            <h3 className='text-2xl tracking-wider capitalize font-medium pb-4'>{heading}</h3>
            <img src={image} alt='' className="rounded-lg h-56 w-full object-cover"/>
            <p className="pt-2">{text}</p>
        </div>
    );
};
export default Services;
