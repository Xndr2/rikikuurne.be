"use client"

import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"

import SliderImg1 from "@/public/home_images/clochard.jpg"
import SliderImg2 from "@/public/home_images/heks.jpg"
import SliderImg3 from "@/public/home_images/spitsbroeders.jpg"

const animation = { duration: 25000, easing: (t: any) => t }

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            initial: 0,
            loop: true,
            renderMode: "performance",

            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            created() {
                setLoaded(true)
            },
        },
        [
            (slider) => {
                let timeout: any
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 3000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ])

    return (
        <>
            <div className="navigation-wrapper flex items-center mt-4">
                {/* Left arrow */}
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />
                    </>
                )}
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1">
                        <p className="text-center font-bold">Titel 1</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
                            <Image src={SliderImg1} width={SliderImg1.width} height={SliderImg1.height} alt="image" className="h-auto mx-auto" />
                            <Image src={SliderImg1} width={SliderImg1.width} height={SliderImg1.height} alt="image" className="h-auto mx-auto hidden md:block" />
                            <Image src={SliderImg1} width={SliderImg1.width} height={SliderImg1.height} alt="image" className="h-auto mx-auto hidden md:block" />
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide2">
                        <p className="text-center font-bold">Titel 2</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
                            <Image src={SliderImg2} width={SliderImg2.width} height={SliderImg2.height} alt="image" className="h-auto mx-auto" />
                            <Image src={SliderImg2} width={SliderImg2.width} height={SliderImg2.height} alt="image" className="h-auto mx-auto hidden md:block" />
                            <Image src={SliderImg2} width={SliderImg2.width} height={SliderImg2.height} alt="image" className="h-auto mx-auto hidden md:block" />
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide3">
                        <p className="text-center font-bold">Titel 3</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
                            <Image src={SliderImg3} width={SliderImg3.width} height={SliderImg3.height} alt="image" className="h-auto mx-auto" />
                            <Image src={SliderImg3} width={SliderImg3.width} height={SliderImg3.height} alt="image" className="h-auto mx-auto hidden md:block" />
                            <Image src={SliderImg3} width={SliderImg3.width} height={SliderImg3.height} alt="image" className="h-auto mx-auto hidden md:block" />
                        </div>
                    </div>
                </div>
                {/* Right arrow */}
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )}
            </div>
        </>
    )
}

function Arrow(props: any) {
    return (
        <svg
            onClick={props.onClick}
            className={`h-8 inline-block hover:fill-slate-700`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}