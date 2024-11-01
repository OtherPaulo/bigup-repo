import SectionBlog from "@/components/(LandingPage)/blogSection/_components/blog"
import { Cases } from "@/components/(LandingPage)/carrossel-cases/_components/cases"
import CTA from "@/components/(LandingPage)/cta/_components/cta"
import Footer from "@/components/(LandingPage)/footer/_components/footer"
import Header from "@/components/(LandingPage)/header/_components/header"
import Main from '@/components/(LandingPage)/main/_components/main'
import ProductGrid from "@/components/(LandingPage)/product-grid/_components/product-grid"
import ServicesSection from "@/components/(LandingPage)/services/_components/services"
import Chat from "@/components/chat/_components/chat"
import Cookies from "@/components/cookies"
import FadeInSection from "@/components/fade-in-section"

export default function Home() {
  return (
    <>
      <Header/>
      <main>
          <Main/>
        <FadeInSection delay={200}>
          <ServicesSection/>
        </FadeInSection>
        <FadeInSection delay={200}>
          <CTA/>
        </FadeInSection>
        <FadeInSection delay={200}>
          <ProductGrid/>
        </FadeInSection>
        <FadeInSection delay={200}>
          <SectionBlog/>
        </FadeInSection>
        <Cookies/>
        <Chat/>
      </main>
      <Footer/>
    </>
  )
}