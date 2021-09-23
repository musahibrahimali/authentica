import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signOut } from "next-auth/client";
import { logo } from "../../../assets/assets";
import { useState } from 'react';
import { useStateValue } from '../../../provider/AppState';
import actionTypes from '../../../utils/Utils';
import { Loader } from '../ui';

const UserProfilePage = () => {
    const [edit, setEdit] = useState(false);
    const [session, loading] = useSession();
    const [{ theme }, dispatch] = useStateValue();

    const router = useRouter();

    const handleSignOut = () => {
        if (session.user) {
            signOut();
            router.replace('/');
        }
    }

    const handleEdit = () => {
        setEdit(!edit);
    }

    /* switch between dark and light mode */
    const handleTheme = () => {
        if (theme) {
            dispatch({
                type: actionTypes.SET_THEME,
                theme: false,
            });
        } else {
            dispatch({
                type: actionTypes.SET_THEME,
                theme: true,
            });
        }
    }

    return (
        <>
            {loading && <Loader />}
            {
                session &&
                <div className="flex flex-col justify-between px-4 pt-4">
                    {/* header section */}
                    <div className="flex justify-between items-center">
                        {/* logo */}
                        <div>
                            <Image src={logo.src} width={50} height={50} alt="authentica" />
                        </div>

                        {/* user name and picture */}
                        <div className="flex justify-center items-center mr-4">
                            <div className="mr-2 cursor-pointer">
                                <Image className="rounded-full" src={session.user?.image ? session.user?.image : logo.src} width={40} height={40} alt="authentica" />
                            </div>
                            <p className="text-gray-700 cursor-default mr-2 dark:text-gray-100">
                                {session.user.name ? session.user?.name : "John Doe"}
                            </p>
                            {/* arrow */}
                            <div className="has-tooltip" onClick={handleSignOut}>
                                <span className='tooltip rounded shadow-md p-2 bg-gray-100 text-gray-700 dark:text-gray-300 mt-8 mr-4'>Sign out</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer text-gray-400 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* user profile info */}
                    <div className="flex flex-col justify-between items-center mt-12">
                        {/* profile page title */}
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-100">Profile Info</h1>
                            <p className="text-gray-700 dark:text-gray-300">Basic info like your name and photo</p>
                        </div>

                        {/* profile body */}

                        <div className="border border-gray-400 dark:border-gray-500 mt-12 rounded-lg h-full w-4/5 mx-4">
                            {/* edit box */}
                            <div className="flex justify-between p-4 border-b border-gray-400 dark:border-gray-500">
                                <div className="flex flex-col justify-center items-start">
                                    <h1 className="font-bold text-lg md:text-2xl text-gray-700 dark:text-gray-300">Profile</h1>
                                    <p className="text-gray-700 dark:text-gray-300">Some info may be visible to other people</p>
                                </div>
                                {/* edit button */}
                                <div className="flex justify-center items-center has-tooltip">
                                    <span className='tooltip rounded shadow-md p-2 bg-gray-100 text-blue-700 dark:text-gray-300 mt-20'>{edit ? "save" : "edit"}</span>
                                    <button onClick={handleEdit} className="border border-gray-400 dark:border-gray-500 rounded-xl px-4 py-1 text-gray-700 dark:text-gray-300">
                                        {edit ? "save" : "edit"}
                                    </button>
                                </div>
                            </div>

                            {/* details follows */}
                            {/* photo */}
                            <div className="p-4 border-b border-gray-400 dark:border-gray-500">
                                <div className="grid grid-cols-4">
                                    <div className="col-span-2">
                                        <div className="flex justify-start items-start">
                                            <p className="text-gray-400 dark:text-gray-200 uppercase text-center">Photo</p>
                                        </div>
                                    </div>

                                    <div className={edit ? "col-span-2 cursor-pointer" : "col-span-2 cursor-default"}>
                                        <div className="flex justify-start items-start">
                                            <Image className="rounded-md" src={session.user?.image ? session.user?.image : logo.src} width={50} height={50} alt="authentica" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* photo */}
                            <div className="p-4 border-b border-gray-400 dark:border-gray-500">
                                <div className="grid grid-cols-4">
                                    <div className="col-span-2">
                                        <div className="flex justify-start items-start">
                                            <p className="text-gray-400 dark:text-gray-200 uppercase text-center">Name</p>
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <div className="flex justify-start items-start">
                                            <input
                                                className="focus:outline-none w-full bg-transparent text-gray-700 dark:text-gray-200"
                                                autoFocus={!edit}
                                                disabled={!edit}
                                                placeholder={session.user?.name ? session.user?.name : "John  Doe"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Bio */}
                            <div className="p-4 border-b border-gray-400 dark:border-gray-500">
                                <div className="grid grid-cols-4">
                                    <div className="col-span-2">
                                        <div className="flex justify-start items-start">
                                            <p className="text-gray-400 dark:text-gray-200 uppercase text-center">Bio</p>
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <div className="flex justify-start items-start">
                                            <input
                                                className="focus:outline-none w-full bg-transparent text-gray-700 dark:text-gray-200"
                                                disabled={!edit}
                                                type="text"
                                                placeholder="I am a software developer based in Ghana Africa..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Phone */}
                            <div className="p-4 border-b border-gray-400 dark:border-gray-500">
                                <div className="grid grid-cols-4">
                                    <div className="col-span-2">
                                        <div className="flex justify-start items-start">
                                            <p className="text-gray-400 dark:text-gray-200 uppercase text-center">Phone</p>
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <div className="flex justify-start items-start">
                                            <input
                                                className="focus:outline-none w-full bg-transparent text-gray-700 dark:text-gray-200"
                                                disabled={!edit}
                                                type="text"
                                                placeholder="+233542864498"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="p-4 border-b border-gray-400 dark:border-gray-500">
                                <div className="grid grid-cols-4">
                                    <div className="col-span-2">
                                        <div className="flex justify-start items-start">
                                            <p className="text-gray-400 dark:text-gray-200 uppercase text-center">Email</p>
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <div className="flex justify-start items-start">
                                            <input
                                                className="focus:outline-none w-full bg-transparent text-gray-700 dark:text-gray-200"
                                                disabled={!edit}
                                                type="text"
                                                placeholder={session.user.email ? session.user.email : "johndoe@email.com"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="p-4">
                                <div className="grid grid-cols-4">
                                    <div className="col-span-2">
                                        <div className="flex justify-start items-start">
                                            <p className="text-gray-400 dark:text-gray-200 uppercase text-center">Password</p>
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <div className="flex justify-start items-start">
                                            <input
                                                className="focus:outline-none text-gray-700 dark:text-gray-200 w-full bg-transparent"
                                                disabled={!edit}
                                                type="password"
                                                placeholder="****************"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* developer */}
                        <div className="flex w-4/5 justify-between mt-8 mb-12 text-gray-600 cursor-default">
                            <p className="text-gray-700 text-center dark:text-gray-400">
                                <span className="">created by </span>
                                <span className="font-bold">
                                    <Link href="https://www.github.com/musahibrahimali">
                                        <a target="_blank">musah ibrahim ali</a>
                                    </Link>
                                </span>
                            </p>
                            <div className="flex">
                                <p className="text-gray-700 text-center dark:text-gray-400">
                                    devChallenges.io
                                </p>
                                <div className="flex ml-2">
                                    {
                                        theme ?
                                            <div className="cursor-pointer" onClick={handleTheme}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                            </div> :
                                            <div className="cursor-pointer" onClick={handleTheme}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default UserProfilePage;