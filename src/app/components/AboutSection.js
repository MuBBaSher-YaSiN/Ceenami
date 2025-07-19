'use client'

import { useEffect, useRef, useState } from 'react'

export default function AboutSection() {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (ref.current) observer.observe(ref.current)

        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [])

    return (
        <section className="bg-black max-w-6xl mx-auto text-white py-20 px-4 flex items-center justify-center">
            <div
                ref={ref}
                className={`max-w-3xl text-center transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-500">
                    About Ceenami
                </h2>
                <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                    Described as a thoughtful artist with no boundaries, Ceenami isn’t boxed in by genre labels. His sound blends catchy pop energy with hip-hop rhythm and real, heartfelt lyrics that shift with each release.
                </p>
                <p className="text-lg md:text-xl text-blue-100 mt-4 leading-relaxed">
                    From Orlando, Florida to fans in Brazil, Germany, Mexico, and the US, Ceenami’s music jumps from bangers to pop hits to deep reflections without skipping a beat. His talent and drive keep pushing him forward in a way that stands out across the music world.
                </p>
            </div>
        </section>
    )
}
