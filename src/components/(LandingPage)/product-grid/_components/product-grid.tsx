
export default function ProductGrid() {
    const images = [
        {
            img: '/us1.png',
            alt: 'US product',
            url: 'https://www.uscleancosmetics.com/'
        },
        {
            img: '/us2.png',
            alt: 'US product',
            url: 'https://www.instagram.com/uscleancosmetics'
        },
        {
            img: '/us3.png',
            alt: 'US product',
            url: 'https://www.facebook.com/uscleancosmetics'
        },
        {
            img: '/nut1.png',
            alt: 'Nut Product',
            url: 'https://www.instagram.com/nuttyfriends/'
        },
        {
            img: '/nut2.jpg',
            alt: 'Nut Product',
            url: 'https://www.facebook.com/nuttyfriendsbr/?locale=pt_BR'
        },
        {
            img: '/nut3.png',
            alt: 'Nut Product',
            url: 'https://www.instagram.com/nuttyfriends/'
        }
    ]

    return (
        <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-4xl font-bold dark:text-white">
      Nossa Jornada Digital
      </h1>
      <p className=" text-base md:text-lg mt-8 mb-16 dark:text-neutral-200">
      Na Jornada Digital, cada projeto é único! Trabalhamos juntos para captar sua essência e desenvolver soluções que realmente ressoam com seu público.
      </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:px-28">
                {images.map((image, i) => (
                    <div key={i} className="rounded-lg overflow-hidden shadow-lg aspect-square">
                        <a href={image.url} className="block w-full h-full" target="_blank" rel="noopener noreferrer">
                            <div className="relative w-full h-full">
                                <img
                                    src={image.img}
                                    alt={image.alt}
                                />
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}