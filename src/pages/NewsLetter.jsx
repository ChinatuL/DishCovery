import { useState } from "react";
import { toast } from "react-toastify";
const NewsLetter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        setEmail("");
        toast.success("Subscribed successfully!");
    };

    return (
        <div className='flex flex-col mx-auto h-96 gap-4 mt-8 px-8 py-8 bg-white rounded-lg shadow-md w-96 hover:shadow-lg'>
            <h1 className='text-3xl text-center font-medium'>
                Hungry for more?
            </h1>
            <p className='text-center text-lg tracking-wide'>
                Stay in touch with the latest food trends. Subscribe to our
                newsletter and have our delectable recipes delivered to your
                mailbox
            </p>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='email' className='text-lg'>
                        Enter your email:
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='johndoe@example.com'
                        className='border border-zinc-500 focus:border-2 focus:border-zinc-950 focus:outline-none py-2 px-4 rounded-md w-full'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button
                    type='submit'
                    className='bg-zinc-950 border-2 border-zinc-950 w-full text-slate-50 mt-4 py-2 rounded-md hover:bg-white hover:text-zinc-950 transition-all duration-300 ease-in-out'
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};
export default NewsLetter;
