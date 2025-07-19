'use client'

import Image from 'next/image'

import frontImg1 from '../assets/front-img-1.jpg'
import frontImg2 from '../assets/front-img-2.jpg'
import frontImg3 from '../assets/front-img-3.jpg'
import frontImg4 from '../assets/front-img-4.jpg'

const images = [
    { src: frontImg1, caption: 'Studio Session' },
    { src: frontImg2, caption: 'Live Performance' },
    { src: frontImg3, caption: 'Behind the Scenes' },
    { src: frontImg4, caption: 'Cover Shoot' },
]

export default function PhotoShowcase() {
    return (
        <section className="bg-black text-white py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-400">
                    Visuals of Ceenami
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {images.map((img, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                            <Image
                                src={img.src}
                                alt={`Ceenami Photo ${index + 1}`}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                placeholder="blur"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {img.caption}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
