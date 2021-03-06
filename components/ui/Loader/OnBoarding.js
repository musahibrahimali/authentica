import { useRouter } from 'next/router';

const OnBoarding = () => {

    const router = useRouter();

    const handleClick = () => {
        router.replace('/auth');
    }

    return (
        <div>
            <div className="bg-grey-50 min-h-screen flex items-center justify-center px-16 animate">
                <div className="relative w-full max-w-lg">

                    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>

                    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2s"></div>

                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4s"></div>

                    <div className="m-8 relative space-y-4 ">

                        <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                            <div className="flex-1">
                                <div className="h-4 bg-gray-300 rounded"></div>
                            </div>
                            <div>
                                <div className="w-24 h-6 rounded-lg bg-purple-300"></div>
                            </div>
                        </div>

                        <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                            <div className="flex-1">
                                <div className="h-4 bg-gray-300 rounded"></div>
                            </div>
                            <div>
                                <div onClick={handleClick} className="w-20 h-6 rounded-lg bg-gray-300 cursor-pointer flex justify-center items-center">
                                    <p className="text-blue-700 text-lg font-bold">Log In</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                            <div className="flex-1">
                                <div className="h-4 bg-gray-300 rounded"></div>
                            </div>
                            <div>
                                <div className="w-28 h-6 rounded-lg bg-pink-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnBoarding;