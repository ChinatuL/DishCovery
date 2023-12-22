const SectionTitle = ({ size, text }) => {
    return (
        <>
        <h2 className={`${size} font-medium`}>{text}</h2>
        <div className="w-5 h-[3px] bg-red-700"></div>
        </>
    );
};
export default SectionTitle;
