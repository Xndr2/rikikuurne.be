"use client"

import React, { useState } from "react"
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"

import SliderImg1 from "@/public/home_images/clochard.jpg"
import SliderImg2 from "@/public/home_images/heks.jpg"
import SliderImg3 from "@/public/home_images/spitsbroeders.jpg"
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
            <h1 className="w-max mx-auto mb-4 font-bold">Title 1</h1>
            <div className="flex justify-between gap-4 mx-auto">
                <Image src={SliderImg1} width={SliderImg1.width} height={SliderImg1.height} alt="image" className="w-auto md:w-1/3 object-cover" />
                <Image src={SliderImg1} width={SliderImg1.width} height={SliderImg1.height} alt="image" className="w-1/3 object-cover hidden md:block" />
                <Image src={SliderImg1} width={SliderImg1.width} height={SliderImg1.height} alt="image" className="w-1/3 object-cover hidden md:block" />
            </div>
          </div>
          
          <div className="keen-slider__slide flex flex-col text-center">
            <h1 className="w-max mx-auto mb-4 font-bold">Title 2</h1>
            <div className="flex justify-between gap-4 mx-auto">
                <Image src={SliderImg2} width={SliderImg2.width} height={SliderImg2.height} alt="image" className="w-auto md:w-1/3 object-cover" />
                <Image src={SliderImg2} width={SliderImg2.width} height={SliderImg2.height} alt="image" className="w-1/3 object-cover hidden md:block" />
                <Image src={SliderImg2} width={SliderImg2.width} height={SliderImg2.height} alt="image" className="w-1/3 object-cover hidden md:block" />
            </div>
          </div>

          <div className="keen-slider__slide flex flex-col text-center">
            <h1 className="w-max mx-auto mb-4 font-bold">Title 3</h1>
            <div className="flex justify-between gap-4 mx-auto">
                <Image src={SliderImg3} width={SliderImg3.width} height={SliderImg3.height} alt="image" className="w-auto md:w-1/3 object-cover" />
                <Image src={SliderImg3} width={SliderImg3.width} height={SliderImg3.height} alt="image" className="w-1/3 object-cover hidden md:block" />
                <Image src={SliderImg3} width={SliderImg3.width} height={SliderImg3.height} alt="image" className="w-1/3 object-cover hidden md:block" />
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
  