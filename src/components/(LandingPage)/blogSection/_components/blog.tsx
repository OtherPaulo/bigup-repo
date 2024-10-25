import Link from 'next/link'
import { BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const blogPosts = [
  {
    id: 1,
    date: "27 SET",
    title: "7 Aplicações da IA Generativa para Impulsionar sua Empresa",
    description: "A inteligência artificial generativa oferece diversas oportunidades para melhorar a eficiência e a inovação nos negócios...",
    author: "Felipe Zavatti",
    authorImage: "/perfil.jpg?height=40&width=40",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nvEPJzn7pNhFg3d4xNtYfjfLL4CK4A.png",
    link: "/blog/ia-generativa"
  },
  {
    id: 2,
    date: "27 SET",
    title: "6 Motivos para implantar uma Squad para impulsionar suas soluções digitais",
    description: "A formação de squads é uma solução eficaz para empresas que buscam aumentar a produtividade e a qualidade. A colaboração...",
    author: "Felipe Zavatti",
    authorImage: "/perfil.jpg?height=40&width=40",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nvEPJzn7pNhFg3d4xNtYfjfLL4CK4A.png",
    link: "/blog/squad-solucoes-digitais"
  },
  {
    id: 3,
    date: "27 SET",
    title: "Principais Tendências Tech para o Segundo Semestre de 2023",
    description: "As 5 principais tendências para o segundo semestre de 2023 no mercado tech incluem a ascensão da IA Adaptável, a ênfase na cultura...",
    author: "Felipe Zavatti",
    authorImage: "/perfil.jpg?height=40&width=40",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nvEPJzn7pNhFg3d4xNtYfjfLL4CK4A.png",
    link: "/blog/tendencias-tech-2023"
  }
]

export default function SectionBlog() {
  return (
    <div className="container mx-auto mb-8  md:py-8 px-4">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div className="mb-4 md:mb-0">
        <h2 className="text-sm font-semibold text-gray-500 mb-2">BLOG</h2>
        <h1 className="text-3xl font-bold text-gray-900">Acompanhe nossos conteúdos</h1>
      </div>
      <Link href="/blog" className="bg-[#CB6CE6]/90 rounded-full px-4 py-2 text-white hover:bg-[#CB6CE6]/90">
        Veja todos
      </Link>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link href={post.link} key={post.id} className="group">
            <Card className="overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="relative pb-[56.25%]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 rounded-full bg-[#CB6CE6]/90 text-white px-2 py-1 text-sm font-semibold">
                  {post.date}
                </div>
              </div>
              <div className="group-hover:bg-[#CB6CE6]/90 transition-colors duration-300">
                <CardHeader>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">{post.title}</h3>
                  <p className="text-gray-600 group-hover:text-white transition-colors duration-300">{post.description}</p>
                </CardHeader>
                <CardFooter className="flex items-center pt-4">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={post.authorImage} alt={post.author} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">{post.author}</span>
                  <BadgeCheck className='w-4 h-4 ml-1 text-blue-500'/>
                </CardFooter>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}