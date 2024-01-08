import { Form } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
const SearchForm = ({ searchTerm, placeholder }) => {
    return (
        <div className='flex justify-center items-center w-full'>
            <Form className='flex gap-2 items-center w-[35rem] max-w-[90vw]'>
                <input
                    type='search'
                    id='search'
                    name='search'
                    defaultValue={searchTerm}
                    placeholder={placeholder}
                    className='border border-zinc-950 w-full h-9 px-4 rounded-md focus:outline-none focus:border-2'
                />

                <button
                    type='submit'
                    className='bg-zinc-950 text-slate-50 px-4 h-9 rounded-md'
                >
                    <FaMagnifyingGlass />
                </button>
            </Form>
        </div>
    );
};
export default SearchForm;
