'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import frontImg1 from '../assets/front-img-1.jpg'
import frontImg2 from '../assets/front-img-2.jpg'
import frontImg3 from '../assets/front-img-3.jpg'
import frontImg4 from '../assets/front-img-4.jpg'
import frontImg5 from '../assets/front-img-5.jpg'

const images = [
    { src: frontImg1, caption: 'Studio Session' },
    { src: frontImg2, caption: 'Live Performance' },
    { src: frontImg5, caption: 'Backstage Moment' },
    { src: frontImg3, caption: 'Behind the Scenes' },
    { src: frontImg4, caption: 'Cover Shoot' },
]

export default function PhotoShowcase() {
    return (
        <section className="bg-black text-white py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-400">
                    Visuals of Ceenami
                </h2>

                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square w-full h-[400px]">
                                <Image
                                    src={img.src}
                                    alt={`Ceenami Photo ${index + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    placeholder="blur"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {img.caption}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
