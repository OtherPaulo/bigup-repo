import Footer from "@/components/(LandingPage)/footer/_components/footer";
import Header from "@/components/(LandingPage)/header/_components/header";
import DiferencialSection from "@/components/(Servicos)/diferenciais/_components/diferenciais";
import Jornada from "@/components/(Servicos)/jornada/_components/jornada";
import MainServices from "@/components/(Servicos)/main/_components/main";
import ParceriaSection from "@/components/(Servicos)/parceria/_components/parceria";
import Chat from "@/components/chat/_components/chat";
import FadeInSection from "@/components/fade-in-section";

export default function Serviços() {
    return (
        <div>
            <Header />
            <main>
            <MainServices />
            <FadeInSection delay={200}>
            <DiferencialSection />
            </FadeInSection>
            <FadeInSection delay={200}>
            <Jornada />
            </FadeInSection>
            <FadeInSection delay={200}>
            <ParceriaSection />
            </FadeInSection>
            <Chat />
            </main>
            <Footer />
        </div>
    )
}