import Header from "@/components/(LandingPage)/header/_components/header"
import Main from '@/components/(LandingPage)/main/_components/main'
import Chat from "@/components/chat/_components/chat"

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Main/>
        <Chat/>
      </main>
    </>
  )
}