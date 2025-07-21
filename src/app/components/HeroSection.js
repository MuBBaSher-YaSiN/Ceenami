'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image'

import frontImg1 from '../assets/front-img-1.jpg'
import frontImg2 from '../assets/front-img-2.jpg'
import frontImg3 from '../assets/front-img-3.jpg'
import frontImg4 from '../assets/front-img-4.jpg'

const images = [frontImg1, frontImg2, frontImg3, frontImg4]

export default function HeroSection() {
    return (
        <section className=" w-full bg-black text-white mt-10 min-h-[100vh] flex items-center">
            <div className="max-lg:pt-20 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-4">

                {/* Left Side */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold">
                        Ceenami
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-blue-200">
                        Thoughtful Artist with No Boundaries
                    </p>
                    <button
                        onClick={() => window.open('https://linktr.ee/ceenami', '_blank')}
                        className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
                    >
                        Stream (new song name) here!
                    </button>
                </div>

                {/* Right Side - Swiper Carousel */}
                <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
                    <Swiper
                        modules={[Autoplay, EffectFade]}
                        effect="fade"
                        loop
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        className="w-full h-full"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-full">
                                    <Image
                                        src={img}
                                        alt={`Ceenami Slide ${index + 1}`}
                                        className="object-cover"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        placeholder="blur"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
