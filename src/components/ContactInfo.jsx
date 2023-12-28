import { contactInfo } from "../utils/data";

const ContactInfo = () => {
    return (
        <>
            {contactInfo.map((info) => {
                const { id, icon, text } = info;
                return (
                    <div key={id} className='flex gap-2 items-center text-lg'>
                        <span>{icon}</span>
                        <span>{text}</span>
                    </div>
                );
            })}
        </>
    );
};
export default ContactInfo;
