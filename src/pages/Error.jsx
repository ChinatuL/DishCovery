import { Link, useRouteError } from "react-router-dom";
import errorImage from "../assets/images/error-image.jpg";
const Error = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <main
            className='px-4 md:px-0 w-full min-h-screen bg-cover bg-no-repeat bg-center brightness-75'
            style={{ backgroundImage: `url(${errorImage})` }}
        >
            <div className='flex flex-col gap-4 justify-center items-center h-screen'>
                {error.status === 404 ? (
                    <>
                        <h1 className='text-9xl text-red-950 font-semibold tracking-widest'>
                            404
                        </h1>
                        <p className='text-2xl font-semibold'>
                            Oops... Nothing delicious here
                        </p>
                        <p className='text-xl text-center'>
                            Looks like the page you're trying to find is not
                            available
                        </p>
                        <Link
                            to='/'
                            className='border-2 border-red-950 px-8 py-2 rounded-md text-xl text-red-950 transition-all duration-300 ease-in-out hover:bg-red-950 hover:text-slate-50'
                        >
                            Go home
                        </Link>
                    </>
                ) : (
                    <>
                        <h1 className='text-4xl font-semibold'>
                            An error occured... Try again
                        </h1>
                    </>
                )}
            </div>
        </main>
    );
};
export default Error;
