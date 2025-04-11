"use client"

import React, { useState } from "react"
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"

import SliderImg11 from "@/public/home_images/1/Twijfelaar 85 x 80cm.jpg"
import SliderImg12 from "@/public/home_images/1/Spitsbroeders 60 x 50cm.jpg"
import SliderImg13 from "@/public/home_images/1/Amazone 78cm x 35cm.jpg"

import SliderImg21 from "@/public/home_images/2/Bankzitters 1.jpg"
import SliderImg22 from "@/public/home_images/2/Bankzitters 2.jpg"
import SliderImg23 from "@/public/home_images/2/Bankzitters 3.jpg"

import SliderImg31 from "@/public/home_images/3/Mijmeraar 1m x 40cm.jpg"
import SliderImg32 from "@/public/home_images/3/Twee eentjes 1m x 40cm.jpg"
import SliderImg33 from "@/public/home_images/3/Violist 96 x 50cm.jpg"

import { calculateOverrideValues } from "next/dist/server/font-utils"

const ResizePlugin: KeenSliderPlugin = (slider) => {
    const observer = new ResizeObserver(function () {
      slider.update()
    })
  
    slider.on("created", () => {
      observer.observe(slider.container)
    })
    slider.on("destroyed", () => {
      observer.unobserve(slider.container)
    })
  }

export default function Slider() {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
            },
            created() {
            setLoaded(true)
            },
            loop: true,
        },
    [ResizePlugin]
    )

  return (
    <>
      <div className="navigation-wrapper flex relative mt-10 items-center justify-center">
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
          <div className="keen-slider__slide flex flex-col text-center">
            <h1 className="w-max mx-auto mb-4 font-bold">Polystyreen/Isomo beelden</h1>
            <div className="flex justify-center md:justify-between gap-4 mx-auto">
              <div className="w-2/3 md:w-1/3 aspect-[2/3] overflow-hidden">
                <Image src={SliderImg11} alt="image" className="w-full h-full object-cover" />
              </div>
              <div className="hidden md:block w-1/3 aspect-[2/3] overflow-hidden">
                <Image src={SliderImg12} alt="image" className="w-full h-full object-cover" />
              </div>
              <div className="hidden md:block w-1/3 aspect-[2/3] overflow-hidden">
                <Image src={SliderImg13} alt="image" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="keen-slider__slide flex flex-col text-center">
            <h1 className="w-max mx-auto mb-4 font-bold">Schilderijen op hout</h1>
            <div className="flex justify-center md:justify-between gap-4 mx-auto">
              <div className="w-2/3 md:w-1/3 aspect-[2/3] overflow-hidden">
                <Image src={SliderImg21} alt="image" className="w-full h-full object-cover" />
              </div>
              <div className="hidden md:block w-1/3 aspect-[2/3] overflow-hidden">
                <Image src={SliderImg22} alt="image" className="w-full h-full object-cover" />
              </div>
              <div className="hidden md:block w-1/3 aspect-[2/3] overflow-hidden">
                <Image src={SliderImg23} alt="image" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="keen-slider__slide flex flex-col text-center">
            <h1 className="w-max mx-auto mb-4 font-bold">Metaal/Hout beelden</h1>
            <div className="flex justify-center md:justify-between gap-4 mx-auto">
              <div className="w-2/3 md:w-1/3 aspect-[2/3] overflow-hidden">
                <Image src={SliderImg31} alt="image" className="w-full h-full object-cover" />
              </div>
              <div className="hidden md:block w-1/3 aspect-[2/3] overflow-hidden">
                <Image src={SliderImg32} alt="image" className="w-full h-full object-cover" />
              </div>
              <div className="hidden md:block w-1/3 aspect-[2/3] overflow-hidden">
                <Image src={SliderImg33} alt="image" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
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

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
  }) {
    return (
      <svg
        onClick={props.onClick}
        // className="` ${
        //   props.left ? "arrow--left" : "arrow--right"
        // } ${disabled}`
        className="w-7 h-7 fill-black cursor-pointer"
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
  