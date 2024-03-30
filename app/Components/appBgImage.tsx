import Image from "next/image";
import bgImage from '../../public/background.jpg';

export default function AppBgImg() {
    return <Image
        src={bgImage}
        placeholder="blur"
        sizes="100%"
        style={{
            objectFit: 'cover',
            zIndex: -1,
            position: 'fixed',
        }}
        alt="Background image of the app"
    />
}