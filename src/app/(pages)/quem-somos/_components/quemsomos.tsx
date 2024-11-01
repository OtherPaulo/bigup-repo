import Footer from "@/components/(LandingPage)/footer/_components/footer";
import Header from "@/components/(LandingPage)/header/_components/header";
import Propositoo from "@/components/(QuemSomos)/propositoo/_components/proposito";
import QMain from "@/components/(QuemSomos)/qmain/_components/qmain";
import Chat from "@/components/chat/_components/chat";
import FadeInSection from "@/components/fade-in-section";

export default function QuemSomos() {
    return (
        <>
        <Header />
        <main>
        <QMain/>
        <FadeInSection delay={200}>
        <Propositoo />
        </FadeInSection>
        <Chat />
        </main>
        <Footer />
        </>
    )
}