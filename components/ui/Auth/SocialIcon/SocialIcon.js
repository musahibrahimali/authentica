import Image from 'next/image';

const SocialIcon = (props) => {
    const { onTap, image } = props;
    return (
        <>
            <div onClick={onTap} className="bg-gray-300 cursor-pointer rounded-full mx-4 border-4 p-2 h-10 w-10 flex justify-center items-center">
                <Image src={image} width={20} height={20} alt="social image" />
            </div>
        </>
    );
}

export default SocialIcon;