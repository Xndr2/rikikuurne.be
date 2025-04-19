"use client"
import React, { useState, useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import SliderImg1 from "@/public/home_images/1/Twijfelaar 85 x 80cm.jpg"
import SliderImg2 from "@/public/home_images/1/Spitsbroeders 60 x 50cm.jpg"
import SliderImg3 from "@/public/home_images/1/Amazone 78cm x 35cm.jpg"
import SliderImg4 from "@/public/home_images/2/Bankzitters 1.jpg"
import SliderImg5 from "@/public/home_images/2/Bankzitters 2.jpg"
import SliderImg6 from "@/public/home_images/2/Bankzitters 3.jpg"
import SliderImg7 from "@/public/home_images/3/Mijmeraar 1m x 40cm.jpg"
import SliderImg8 from "@/public/home_images/3/Twee eentjes 1m x 40cm.jpg"
import SliderImg9 from "@/public/home_images/3/Violist 96 x 50cm.jpg"

// Categories with images
const categories = [
  {
    name: "Beelden Isomo",
    images: [SliderImg1, SliderImg2, SliderImg3]
  },
  {
    name: "Schilderijen Hout",
    images: [SliderImg4, SliderImg5, SliderImg6]
  },
  {
    name: "Beelden Metaal/Hout",
    images: [SliderImg7, SliderImg8, SliderImg9]
  }
];

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  // Check if window is available (client-side)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkMobile()
    
    // Add resize listener
    window.addEventListener('resize', checkMobile)
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slides: {
        perView: 1,
        spacing: 15,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        
        slider.on("created", () => {
          setLoaded(true)
          nextTimeout()
        })
        
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
        
        slider.on("slideChanged", (s) => {
          setCurrentSlide(s.track.details.rel)
        })
      },
    ]
  )

  return (
    <div className="relative my-8">
      {/* Category Title */}
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
        {categories[currentSlide].name}
      </h2>
      
      <div ref={sliderRef} className="keen-slider h-80">
        {categories.map((category, categoryIndex) => (
          <div key={`category-${categoryIndex}`} className="keen-slider__slide">
            <div className="flex h-full">
              {isMobile ? (
                // Mobile view: Show only the first image of each category
                <div className="w-full h-full px-2">
                  <div className="relative w-full h-full">
                    <Image
                      src={category.images[0]}
                      alt={`${category.name}-image-0`}
                      fill={true}
                      sizes="100vw"
                      className="object-contain"
                      priority={categoryIndex === 0}
                    />
                  </div>
                </div>
              ) : (
                // Desktop view: Show all three images of each category
                category.images.map((image, imgIndex) => (
                  <div 
                    key={`img-${categoryIndex}-${imgIndex}`} 
                    className="w-1/3 px-2 h-full"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={image}
                        alt={`${category.name}-image-${imgIndex}`}
                        fill={true}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain"
                        priority={categoryIndex === 0 && imgIndex === 0}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation()
              instanceRef.current?.prev()
            }}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-600 text-white rounded-full z-10 opacity-70 hover:opacity-100 transition-opacity"
          >
            &lt;
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation()
              instanceRef.current?.next()
            }}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-600 text-white rounded-full z-10 opacity-70 hover:opacity-100 transition-opacity"
          >
            &gt;
          </button>

          <div className="flex justify-center mt-4">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`mx-1 px-3 py-1 rounded-full text-xs ${
                  currentSlide === idx 
                    ? "bg-gray-800 text-white" 
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                } transition-colors`}
                aria-label={`Go to ${category.name}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </>
      )}

      {/* {isMobile && (
        <div className="text-center mt-2 text-sm text-gray-500">
          Sleep voor meer categorieën
        </div>
      )} */}
    </div>
  );
};

export default ImageCarousel;