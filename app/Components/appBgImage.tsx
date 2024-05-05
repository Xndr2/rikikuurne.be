import Image from "next/image";
import bgImage from '../../public/background.jpg';

export default function AppBgImg() {
    return <Image
        src={bgImage}
        placeholder="blur"
        style={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'cover',
            zIndex: -1,
            position: 'fixed',
        }}
        alt="Background image of the app"
    />
}