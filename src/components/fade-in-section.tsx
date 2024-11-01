'use client'

import { useEffect, useRef, useState } from 'react'

export default function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const [isVisible, setVisible] = useState(false)
    const domRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.unobserve(entry.target)
                }
            })
        })
        
        const currentElement = domRef.current
        if (currentElement) {
            observer.observe(currentElement)
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement)
            }
        }
    }, [])

    return (
        <div
            ref={domRef}
            className={`transition-opacity duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}