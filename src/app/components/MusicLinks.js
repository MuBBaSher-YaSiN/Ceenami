'use client'

import { FaSpotify, FaApple, FaYoutube, FaSoundcloud, FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa'

export default function MusicLinks() {
    const links = [
        {
            name: 'Spotify',
            icon: <FaSpotify size={28} />,
            url: 'https://open.spotify.com/artist/3R9k93fDYlO9fMpy3kCHj8',
            color: 'bg-green-500',
        },
        {
            name: 'Apple Music',
            icon: <FaApple size={28} />,
            url: 'https://music.apple.com/us/artist/ceenami/1581209620',
            color: 'bg-gray-800',
        },
        {
            name: 'YouTube',
            icon: <FaYoutube size={28} />,
            url: 'https://www.youtube.com/@ceenami',
            color: 'bg-red-600',
        },
        {
            name: 'SoundCloud',
            icon: <FaSoundcloud size={28} />,
            url: 'https://soundcloud.com/ceenami',
            color: 'bg-orange-500',
        },
        {
            name: 'TikTok',
            icon: <FaTiktok size={28} />,
            url: 'https://www.tiktok.com/@ceenami?lang=en',
            color: 'bg-black',
        },
        {
            name: 'Instagram',
            icon: <FaInstagram size={28} />,
            url: 'https://Instagram.com/theceenami',
            color: 'bg-pink-600',
        },
        {
            name: 'Facebook',
            icon: <FaFacebook size={28} />,
            url: 'https://facebook.com/theceenami',
            color: 'bg-blue-600',
        },
    ]

    return (
        <section className="bg-black max-w-6xl mx-auto text-white py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-red-500">
                    Follow and Stream
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full flex items-center gap-3 justify-center py-3 px-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ${link.color}`}
                        >
                            {link.icon}
                            <span className="text-white font-medium">{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
