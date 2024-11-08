export default function ProductGrid() {
    const images = [
        {
            img: '/us1.png',
            alt: 'US Clean Cosmetics product',
            title: 'US CLEAN COSMETICS 2020',
            subtitle: 'Branding, E-commerce & Social Media',
            url: 'https://www.uscleancosmetics.com/'
        },
        {
            img: '/nut2.jpg',
            alt: 'Nutty Friends Product',
            title: 'NUTTY FRIENDS 2020',
            subtitle: 'E-commerce',
            url: 'https://www.instagram.com/nuttyfriends/'
        },
        {
            img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zavatti-wvzeNYzEZrTWnfNa86xayTWQ9QpuqH.png',
            alt: 'Megga Zavatti Product',
            title: 'MEGGA ZAVATTI 2022',
            subtitle: 'Branding, Site & Social Media',
            url: 'https://www.instagram.com/meggazavattimarmores/'
        },
        {
            img: '/encaixa.ai.jpeg',
            alt: 'Encaixa.ai Product',
            title: 'ENCAIXA.AI 2023',
            subtitle: 'Plataforma SaaS',
            url: 'https://www.encaixa.ai/'
        },
        {
            img: '/case-laganexa.png',
            alt: 'La Ganexa Product',
            title: 'LA GANEXA 2024',
            subtitle: 'Branding, Landing Page',
            url: 'https://lojalaganexa.com.br/'
        },
        {
            img: '/case-agora-facilita.png',
            alt: 'Agora Facilita Product',
            title: 'AGORA FACILITA 2024',
            subtitle: 'E-commerce, funciolaidades personalizadas',
            url: 'https://agorafacilita.com/'
        }
    ]

    return (
        <div className="container mx-auto px-4 mb-8 py-8">
            <h1 className="text-xl md:text-4xl font-bold dark:text-white">
                Nossa Jornada Digital
            </h1>
            <p className="text-base md:text-lg mt-8 mb-16 dark:text-neutral-200">
                Trabalhamos juntos para captar sua essência e desenvolver soluções que realmente ressoam com seu público.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:px-28">
                {images.map((image, i) => (
                    <div key={i} className="relative rounded-lg overflow-hidden shadow-lg aspect-square group">
                        <a href={image.url} className="block w-full h-full" target="_blank" rel="noopener noreferrer">
                            <div className="relative w-full h-full transition-opacity duration-300 group-hover:opacity-90 group-hover:blur-sm">
                                <img
                                    src={image.img}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <h2 className="text-lg font-semibold">{image.title}</h2>
                                <p className="text-sm">{image.subtitle}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <p className="md:text-center mt-8 text-gray-400">
                Todos os projetos citados tiveram envolvimento em diversas fases, sendo elas em analises coparticipativas e participativas integralmente.
            </p>
        </div>
    )
}
