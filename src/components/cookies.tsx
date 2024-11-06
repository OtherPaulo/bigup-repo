"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Cookies() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      // Add a delay of 5 seconds before showing the banner
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 5000)
      // Cleanup the timer if the component is unmounted
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setShowBanner(false)
  }

  if (!showBanner) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="mx-auto max-w-[800px] rounded-lg bg-white p-4 shadow-lg">
        <div className="flex flex-wrap items-center justify-center gap-2 text-center text-sm">
          <span>
            Utilizamos cookies para armazenar estatísticas de visitas para melhorar sua experiência de navegação. Ao
            continuar, você concorda com nossa{" "}
            <Link href="/politica-de-privacidade" className="text-primary underline">
              política de privacidade
            </Link>
          </span>
          <Button
            onClick={handleAccept}
            className="bg-[#AEFF00] text-black hover:bg-[#AEFF00]"
            size="sm"
          >
            Concordar e fechar
          </Button>
        </div>
      </div>
    </div>
  )
}