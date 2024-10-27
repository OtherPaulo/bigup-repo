'use client'

import * as React from "react"
import Image from 'next/image'
import { BadgeCheck } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const blogPosts = [
    {
        id: 1,
        date: "27 SET",
        title: "7 Aplicações da IA Generativa para Impulsionar sua Empresa",
        description: "A inteligência artificial generativa oferece diversas oportunidades para melhorar a eficiência e a inovação nos negócios...",
        author: "Felipe Zavatti",
        authorImage: "/perfil.jpg?height=40&width=40",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nvEPJzn7pNhFg3d4xNtYfjfLL4CK4A.png",
        link: "/blog/post/metaverso"
    },
    {
        id: 2,
        date: "27 SET",
        title: "6 Motivos para implantar uma Squad para impulsionar suas soluções digitais",
        description: "A formação de squads é uma solução eficaz para empresas que buscam aumentar a produtividade e a qualidade. A colaboração...",
        author: "Felipe Zavatti",
        authorImage: "/perfil.jpg?height=40&width=40",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nvEPJzn7pNhFg3d4xNtYfjfLL4CK4A.png",
        link: "/blog/post/estrategia-para-marketing"
    },
    {
        id: 3,
        date: "27 SET",
        title: "Principais Tendências Tech para o Segundo Semestre de 2023",
        description: "As 5 principais tendências para o segundo semestre de 2023 no mercado tech incluem a ascensão da IA Adaptável, a ênfase na cultura...",
        author: "Felipe Zavatti",
        authorImage: "/perfil.jpg?height=40&width=40",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nvEPJzn7pNhFg3d4xNtYfjfLL4CK4A.png",
        link: "/blog/post/como-ter-um-site-responsivo"
    }
]

export default function FeaturedPostsCarousel() {
    const [api, setApi] = React.useState<any>()
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <section className="relative bg-gray-800 py-16">
            <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div className="mb-4 md:mb-0">
        <h2 className="text-sm font-semibold text-gray-500 mt-8 mb-2">BLOG</h2>
        <h1 className="text-3xl font-bold text-white">Confira nossas ultimas postagens</h1>
      </div>
    </div>
                <Carousel setApi={setApi} className="w-full max-w-6xl mx-auto">
                    <CarouselContent>
                        {blogPosts.map((post, index) => (
                            <CarouselItem key={post.id}>
                                <Card className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <CardContent className="p-0">
                                        <a
                                            href={post.link}
                                            rel="noopener noreferrer"
                                            className="block"
                                        >
                                            <div className="md:flex">
                                                <div className="md:flex-shrink-0">
                                                    <Image
                                                        src={post.image}
                                                        alt={post.title}
                                                        width={600}
                                                        height={400}
                                                        className="h-48 w-full object-cover md:h-full md:w-[24rem]"
                                                    />
                                                </div>
                                                <div className="p-8">
                                                    <div className="inline-block rounded-full bg-[#CB6CE6]/90 text-white px-2 py-1 text-sm font-semibold">
                                                        {post.date}
                                                    </div>
                                                    <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                                                        {post.title}
                                                    </div>
                                                    <p className="mt-2 text-gray-500">{post.description}</p>
                                                    <div className="mt-4 flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <Image
                                                                className="h-10 w-10 rounded-full"
                                                                src={post.authorImage}
                                                                alt={post.author}
                                                                width={40}
                                                                height={40}
                                                            />
                                                        </div>
                                                        <div className="flex ml-3">
                                                            <p className="text-sm font-medium text-gray-900">{post.author}</p>
                                                            <BadgeCheck className='w-4 h-4 ml-1 mt-[0.12rem] text-blue-500'/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:block"/>
                    <CarouselNext className="hidden md:block "/>
                </Carousel>
                <div className="flex justify-center mt-4">
                    {blogPosts.map((_, index) => (
                        <Button
                            key={index}
                            variant="ghost"
                            size="icon"
                            className={`h-3 w-3 mx-1 rounded-full ${
                                index === current - 1 ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                            onClick={() => api?.scrollTo(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}