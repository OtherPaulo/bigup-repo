import Footer from "@/components/(LandingPage)/footer/_components/footer";
import Header from "@/components/(LandingPage)/header/_components/header";
import Propositoo from "@/components/(QuemSomos)/propositoo/_components/proposito";
import QMain from "@/components/(QuemSomos)/qmain/_components/qmain";
import Chat from "@/components/chat/_components/chat";

export default function QuemSomos() {
    return (
        <>
        <Header />
        <main>
        <QMain/>
        <Propositoo />
        <Chat />
        </main>
        <Footer />
        </>
    )
}