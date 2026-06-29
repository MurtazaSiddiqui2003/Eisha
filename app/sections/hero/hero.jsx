import Image from 'next/image'

import heroImage from '../../assets/img/hero16.jpeg'

const Hero = () => {
    return(
        <section className="hero-section">
            <Image src={heroImage} alt="Hero Image" Width='100%' Hzzeeight='auto' />
        </section>
    )
}

export default Hero
