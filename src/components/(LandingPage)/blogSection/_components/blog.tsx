import Link from 'next/link'
import { BadgeCheck } from 'lucide-react';
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const blogPosts = [
  {
    id: 1,
    date: "27 SET",
    title: "Metaverso: Um Grande Passo para os Chatbots e Outras IAs",
    description: "O metaverso está emergindo como uma nova fronteira digital, e com ele surgem oportunidades inovadoras para o uso de chatbots e inteligência artificial...",
    author: "Felipe Zavatti",
    authorImage: "/perfil.jpg?height=40&width=40",
    image: "/metaverso.jpg",
    link: "/blog/post/metaverso"
  },
  {
    id: 2,
    date: "12 SET",
    title: "Estratégias de Marketing Digital para Marcas",
    description: "No cenário digital atual, uma estratégia de marketing eficaz é essencial para que sua marca se destaque e alcance seus objetivos de negócio...",
    author: "Felipe Zavatti",
    authorImage: "/perfil.jpg?height=40&width=40",
    image: "/estrategia.png",
    link: "/blog/post/estrategia-para-marketing"
  },
  {
    id: 3,
    date: "22 AGO",
    title: "Como Ter um Site Responsivo",
    description: "Em um mundo onde o acesso à internet é cada vez mais feito por dispositivos móveis, ter um site responsivo é fundamental para garantir uma boa experiência ao usuário...",
    author: "Felipe Zavatti",
    authorImage: "/perfil.jpg?height=40&width=40",
    image: "/website.jpg",
    link: "/blog/post/como-ter-um-site-responsivo"
  }
]

export default function SectionBlog() {
  return (
    <div className="container mx-auto mb-8  md:py-8 px-4">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div className="mb-4 md:mb-0">
      <div className="inline-block bg-[#ff6d1f]/60 text-white text-sm font-medium px-3 py-1 rounded-full mb-8">Blog</div>
      <h1 className="text-xl md:text-4xl font-bold text-gray-900">Acompanhe nossos conteúdos</h1>
      </div>
      <Link href="/blog" className="bg-black rounded-full px-4 md:px-14 py-2 text-white">
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
                <div className="absolute top-4 left-4 rounded-full bg-[#ff6d1f]/90 text-white px-2 py-1 text-sm font-semibold">
                  {post.date}
                </div>
              </div>
              <div className="group-hover:bg-[#ff6d1f]/90 transition-colors duration-300">
                <CardHeader>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300">{post.title}</h3>
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