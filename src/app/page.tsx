import Footer from "@/components/(LandingPage)/footer/_components/footer"
import Header from "@/components/(LandingPage)/header/_components/header"
import Main from '@/components/(LandingPage)/main/_components/main'
import ProductGrid from "@/components/(LandingPage)/product-grid/_components/product-grid"
import Chat from "@/components/chat/_components/chat"

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Main/>
        <ProductGrid/>
        <Chat/>
      </main>
      <Footer/>
    </>
  )
}