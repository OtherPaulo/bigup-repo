'use client'

import { useState, useEffect } from 'react'
import Header from "@/components/(LandingPage)/header/_components/header"
import Loading from '@/components/(LandingPage)/loading/_components/loading'
import Main from '@/components/(LandingPage)/main/_components/main'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // Adjust this value to control how long the loading screen is shown

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Header/>
      <main>
        <Main/>
      </main>
    </>
  )
}