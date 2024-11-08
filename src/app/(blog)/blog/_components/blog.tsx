import FeaturedPostsCarousel from "@/components/(Blog)/carrossel/_components/carrossel";
import PostsBlog from "@/components/(Blog)/posts/_components/posts";
import Footer from "@/components/(LandingPage)/footer/_components/footer";
import Header from "@/components/(LandingPage)/header/_components/header";
import Cookies from "@/components/cookies";

export default function Blog() {
  return (
    <>
    <Header />
    <main>
    <FeaturedPostsCarousel/>
    <PostsBlog />
    </main>
    <Cookies/>
    <Footer />
    </>
  )
}