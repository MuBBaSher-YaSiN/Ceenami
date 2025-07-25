'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        visible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-opacity duration-300"
                aria-label="Scroll to top"
            >
                <FaArrowUp size={18} />
            </button>
        )
    )
}
